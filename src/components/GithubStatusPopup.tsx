"use client";
import SafeWidget from "./SafeWidget";

interface GithubStatusPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function GithubStatusPopup({ open, onClose }: Readonly<GithubStatusPopupProps>) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-[var(--gh-canvas-default)] rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
        <button
          className="absolute top-4 right-4 text-2xl text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)]"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-[var(--gh-fg-default)]">GitHub Status</h2>
        <div className="mb-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-semibold text-[var(--gh-fg-default)]">Contribution Graph (GitHub)</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-[var(--gh-attention-subtle)] text-[var(--gh-attention-fg)] font-medium self-start sm:self-center">Live</span>
          </div>
          <div className="mt-4 overflow-hidden rounded-md">
            <img
              src="https://ghchart.rshah.org/4fb6f9/Isuranga-2001"
              alt="GitHub contribution graph for Isuranga-2001"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)]">GitHub Pulse</h3>
              <p className="text-[var(--gh-fg-muted)]">Live widgets from statsforgit.com</p>
            </div>
            <a
              href="https://www.statsforgit.com/Isuranga-2001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--gh-accent-fg)] hover:text-[var(--gh-accent-emphasis)] font-medium transition-colors"
            >
              View on statsforgit
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11 3a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 11-2 0V5.414l-6.293 6.293a1 1 0 01-1.414-1.414L14.586 4H12a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
          <div className="mt-6 space-y-6">
            <SafeWidget
              src="https://greptile-stats.vercel.app/api/widget/Isuranga-2001/private-stats"
              alt="GitHub stats for Isuranga-2001 from statsforgit"
              title="GitHub Stats"
            />
            {/* <SafeWidget
              src="https://greptile-stats.vercel.app/api/widget/Isuranga-2001/contributions"
              alt="GitHub contributions chart for Isuranga-2001 from statsforgit"
              title="Contributions"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
