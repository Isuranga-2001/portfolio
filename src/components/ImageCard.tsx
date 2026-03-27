import Image from "next/image";

interface ImageCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

export default function ImageCard({ title, image, onClick }: ImageCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-xl border border-[var(--gh-border-default)] bg-[var(--gh-canvas-subtle)] text-left"
      aria-label={`Open event: ${title}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-base font-semibold text-white translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {title}
          </p>
        </div>
      </div>
    </button>
  );
}
