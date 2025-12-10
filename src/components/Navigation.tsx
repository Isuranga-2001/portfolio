"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--gh-border-default)] bg-[var(--gh-canvas-default)] backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-[var(--gh-fg-default)] hover:text-[var(--gh-accent-fg)] transition-colors">
            Isuranga Warnasooriya
          </Link>
          
          <div className="flex items-center gap-1">
            <div className="hidden md:flex gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-[var(--gh-canvas-subtle)] text-[var(--gh-fg-default)]"
                      : "text-[var(--gh-fg-muted)] hover:bg-[var(--gh-canvas-subtle)] hover:text-[var(--gh-fg-default)]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-[var(--gh-accent-emphasis)] text-white rounded-md text-sm font-medium hover:bg-[var(--gh-accent-fg)] transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
