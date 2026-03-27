"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

export interface EventDetails {
  id: string;
  name: string;
  date: string;
  location: string;
  coverImage: string;
  description: string;
  images: string[];
}

interface EventComponentProps {
  event: EventDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventComponent({ event, isOpen, onClose }: EventComponentProps) {
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

  if (!isOpen || !event) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[var(--gh-canvas-default)] border border-[var(--gh-border-default)] rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[var(--gh-canvas-default)] border-b border-[var(--gh-border-default)]">
          <div>
            <h2 className="text-2xl font-bold text-[var(--gh-fg-default)]">{event.name}</h2>
            <p className="text-sm text-[var(--gh-fg-muted)] mt-1">
              {event.date} • {event.location}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[var(--gh-fg-muted)] hover:text-[var(--gh-fg-default)] hover:bg-[var(--gh-canvas-subtle)] rounded-lg transition-colors"
            aria-label="Close event modal"
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

        <div className="p-6 space-y-6">
          <div>
            <p className="text-[var(--gh-fg-muted)] leading-relaxed whitespace-pre-line">{event.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">Memories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.images.map((imgSrc, index) => (
                <div
                  key={`${event.id}-image-${index}`}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[var(--gh-border-default)]"
                >
                  <Image
                    src={imgSrc}
                    alt={`${event.name} memory ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
