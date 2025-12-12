"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

export interface ProjectDetails {
  title: string;
  description: string;
  fullDescription: string;
  year: string;
  association: string;
  category: string;
  technologies: string[];
  skills: string[];
  features?: string[];
  screenshots: number;
  screenshotBasePath: string;
  embeddedVideo?: string;
  links?: {
    github?: string;
    download?: string;
    demo?: string;
  };
  note?: string;
}

interface ProjectModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setIsVideoPlaying(false);
      setSelectedImage(null);
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const screenshotArray = Array.from({ length: project.screenshots }, (_, i) => i + 1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--gh-canvas-default)] border border-[var(--gh-border-default)] rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[var(--gh-canvas-default)] border-b border-[var(--gh-border-default)]">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl font-bold text-[var(--gh-fg-default)]">
                {project.title}
              </h2>
              <span className="px-2 py-0.5 text-xs font-semibold bg-[var(--gh-success-emphasis)] text-white rounded">
                {project.category}
              </span>
            </div>
            <p className="text-sm text-[var(--gh-fg-muted)]">
              {project.year} • {project.association}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[var(--gh-fg-muted)] hover:text-[var(--gh-fg-default)] hover:bg-[var(--gh-canvas-subtle)] rounded-lg transition-colors"
            aria-label="Close modal"
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
              About
            </h3>
            <div className="text-[var(--gh-fg-muted)] leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[var(--gh-fg-muted)]"
                  >
                    <span className="text-[var(--gh-accent-fg)]">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-[var(--gh-accent-emphasis)] text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-[var(--gh-canvas-subtle)] text-[var(--gh-fg-muted)] border border-[var(--gh-border-default)] rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && Object.keys(project.links).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
                Links
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gh-canvas-subtle)] text-[var(--gh-fg-default)] border border-[var(--gh-border-default)] rounded-lg hover:border-[var(--gh-accent-emphasis)] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                )}
                {project.links.download && (
                  <a
                    href={project.links.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gh-accent-emphasis)] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gh-canvas-subtle)] text-[var(--gh-fg-default)] border border-[var(--gh-border-default)] rounded-lg hover:border-[var(--gh-accent-emphasis)] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
              {project.note && (
                <p className="mt-3 text-sm text-[var(--gh-fg-muted)] italic">
                  Note: {project.note}
                </p>
              )}
            </div>
          )}

          {/* Embedded Video */}
          {project.embeddedVideo && (
            <div>
              <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
                Gameplay Video
              </h3>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--gh-border-default)] bg-black">
                {!isVideoPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Video thumbnail/preview */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gh-canvas-subtle)] to-[var(--gh-canvas-default)]" />
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="relative z-10 flex items-center justify-center w-20 h-20 bg-[var(--gh-accent-emphasis)] rounded-full hover:scale-110 transition-transform shadow-lg"
                      aria-label="Play video"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                    <p className="absolute bottom-4 text-[var(--gh-fg-muted)] text-sm">
                      Click to play gameplay video
                    </p>
                  </div>
                ) : (
                  <iframe
                    src={project.embeddedVideo}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    allow="autoplay"
                    title={`${project.title} gameplay video`}
                  />
                )}
              </div>
            </div>
          )}

          {/* Screenshots */}
          {project.screenshots > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
                Screenshots
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {screenshotArray.map((num) => (
                  <div
                    key={num}
                    className="relative aspect-video rounded-lg overflow-hidden border border-[var(--gh-border-default)] bg-[var(--gh-canvas-subtle)] cursor-pointer group"
                    onClick={() => setSelectedImage(`${project.screenshotBasePath}/img (${num}).jpg`)}
                  >
                    <Image
                      src={`${project.screenshotBasePath}/img (${num}).jpg`}
                      alt={`${project.title} screenshot ${num}`}
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
          )}
        </div>
      </div>

      {/* Image Lightbox */}
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
          {project.screenshots > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentNum = parseInt(selectedImage.match(/img \((\d+)\)/)?.[1] || "1");
                  const prevNum = currentNum > 1 ? currentNum - 1 : project.screenshots;
                  setSelectedImage(`${project.screenshotBasePath}/img (${prevNum}).jpg`);
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
                  const currentNum = parseInt(selectedImage.match(/img \((\d+)\)/)?.[1] || "1");
                  const nextNum = currentNum < project.screenshots ? currentNum + 1 : 1;
                  setSelectedImage(`${project.screenshotBasePath}/img (${nextNum}).jpg`);
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
            {selectedImage.match(/img \((\d+)\)/)?.[1] || "1"} / {project.screenshots}
          </div>
        </div>
      )}
    </div>
  );
}
