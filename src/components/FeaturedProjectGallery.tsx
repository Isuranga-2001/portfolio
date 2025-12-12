"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageInfo {
  src: string;
  alt: string;
}

interface GallerySection {
  title: string;
  images: ImageInfo[];
}

interface FeaturedProjectGalleryProps {
  sections: GallerySection[];
  projectTitle: string;
}

export default function FeaturedProjectGallery({
  sections,
  projectTitle,
}: FeaturedProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Flatten all images for navigation
  const allImages = sections.flatMap((section) => section.images);
  const totalImages = allImages.length;

  if (totalImages === 0) {
    return null;
  }

  const currentIndex = selectedImage
    ? allImages.findIndex((img) => img.src === selectedImage)
    : -1;

  return (
    <>
      {/* Sections */}
      <div className="space-y-12">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-[var(--gh-accent-emphasis)] rounded-full"></span>
              {section.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative aspect-video rounded-lg overflow-hidden border border-[var(--gh-border-default)] bg-[var(--gh-canvas-subtle)] cursor-pointer group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
            aria-label="Close image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Navigation buttons */}
          {totalImages > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const prevIndex =
                    currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
                  setSelectedImage(allImages[prevIndex].src);
                }}
                className="absolute left-4 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIndex =
                    currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(allImages[nextIndex].src);
                }}
                className="absolute right-4 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}

          {/* Image container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Screenshot preview"
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white/90 text-sm rounded-full">
            {currentIndex + 1} / {totalImages}
          </div>
        </div>
      )}
    </>
  );
}
