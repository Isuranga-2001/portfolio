import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  date?: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, href, tags, date, children }: CardProps) {
  const CardContent = (
    <div className="h-full border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-border-muted)] transition-all hover:shadow-lg hover:shadow-[var(--gh-accent-emphasis)]/10">
      {date && (
        <p className="text-sm text-[var(--gh-fg-muted)] mb-2">{date}</p>
      )}
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
      {href && (
        <div className="mt-4 text-[var(--gh-accent-fg)] font-medium flex items-center gap-2">
          Learn more <span>→</span>
        </div>
      )}
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
