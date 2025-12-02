"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  projectPath: string;
  projectTitle: string;
}

export default function ProjectGallery({ projectPath, projectTitle }: ProjectGalleryProps) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically discover available images
    const discoverImages = async () => {
      const foundImages: string[] = [];
      let imageIndex = 1;
      let consecutiveFailures = 0;

      // Try to find images up to index 50, stop after 3 consecutive failures
      while (imageIndex <= 50 && consecutiveFailures < 3) {
        const extensions = ['jpg', 'png', 'jpeg'];
        let found = false;

        for (const ext of extensions) {
          const imagePath = `/projects/${projectPath}/img (${imageIndex}).${ext}`;
          
          try {
            const response = await fetch(imagePath, { method: 'HEAD' });
            if (response.ok) {
              foundImages.push(imagePath);
              found = true;
              consecutiveFailures = 0;
              break;
            }
          } catch {
            // Image doesn't exist, continue
          }
        }

        if (!found) {
          consecutiveFailures++;
        }

        imageIndex++;
      }

      setImages(foundImages);
      setLoading(false);
    };

    discoverImages();
  }, [projectPath]);

  // Extract screenshot number from filename "Img (x).jpg"
  const getCaption = (imagePath: string) => {
    const filename = imagePath.split('/').pop() || '';
    const match = filename.match(/img \((\d+)\)/i);
    if (match) {
      const num = match[1].padStart(2, '0');
      return `Screenshot ${num}`;
    }
    return 'Screenshot';
  };

  if (loading) {
    return (
      <div className="border-t border-[var(--gh-border-default)] pt-6 mt-6">
        <h4 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-4">
          Project Screenshots
        </h4>
        <div className="flex items-center justify-center py-8">
          <div className="text-[var(--gh-fg-muted)]">Loading images...</div>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="border-t border-[var(--gh-border-default)] pt-6 mt-6">
        <h4 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-4">
          Project Screenshots
        </h4>
        <div className="flex items-center justify-center py-8 border border-dashed border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-default)]">
          <p className="text-[var(--gh-fg-muted)] text-sm">
            📸 No images found. Add images to <code className="text-xs bg-[var(--gh-canvas-inset)] px-2 py-1 rounded">/public/projects/{projectPath}/</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t border-[var(--gh-border-default)] pt-6 mt-6">
      <h4 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-4">
        Project Screenshots ({images.length})
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((imagePath, index) => (
          <div
            key={imagePath}
            className="border border-[var(--gh-border-default)] rounded-lg overflow-hidden bg-[var(--gh-canvas-default)] hover:border-[var(--gh-accent-fg)] transition-colors"
          >
            <div className="relative aspect-video">
              <Image
                src={imagePath}
                alt={`${projectTitle} - ${getCaption(imagePath)}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 text-center text-sm text-[var(--gh-fg-muted)]">
              {getCaption(imagePath)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
