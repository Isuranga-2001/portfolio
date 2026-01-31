import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  liveLink?: string;
  tags?: string[];
  date?: string;
  category?: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, href, liveLink, tags, date, category, children }: Readonly<CardProps>) {
  const CardContent = (
    <div className="h-full border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-border-muted)] transition-all hover:shadow-lg hover:shadow-[var(--gh-accent-emphasis)]/10">
      <div className="flex items-center justify-between mb-2">
        {date && (
          <p className="text-sm text-[var(--gh-fg-muted)]">{date}</p>
        )}
        {category && (
          <span className="px-2 py-0.5 text-xs font-semibold bg-[var(--gh-success-emphasis)] text-white rounded">
            {category}
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
        {title}
      </h3>
      <p className="text-[var(--gh-fg-muted)] mb-4 leading-relaxed">
        {description}
      </p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-[var(--gh-accent-emphasis)] text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {children}
      <div className="flex flex-wrap gap-3 items-center mt-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--gh-accent-fg)] hover:text-[var(--gh-accent-emphasis)] font-medium transition-colors"
          >
            Live Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        )}
        {href && (
          <div className="text-[var(--gh-accent-fg)] font-medium flex items-center gap-2">
            Learn more <span>→</span>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
