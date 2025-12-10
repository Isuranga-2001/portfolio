"use client";

import { useState } from "react";

interface SafeWidgetProps {
  src: string;
  alt: string;
  title: string;
}

export default function SafeWidget({ src, alt, title }: SafeWidgetProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  return (
    <div className="border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-subtle)] p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-[var(--gh-fg-default)]">{title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-[var(--gh-attention-subtle)] text-[var(--gh-attention-fg)] font-medium">
          Live
        </span>
      </div>
      <div className="overflow-hidden rounded-md border border-[var(--gh-border-default)] bg-[var(--gh-canvas-default)]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto"
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  );
}
