"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--gh-border-default)] bg-[var(--gh-canvas-subtle)] mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-4">
              Isuranga Warnasooriya
            </h3>
            <p className="text-[var(--gh-fg-muted)] text-sm">
              Associate Software Engineer & Final Year IT Undergraduate at University of Moratuwa
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[var(--gh-accent-fg)] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-[var(--gh-accent-fg)] hover:underline">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-[var(--gh-accent-fg)] hover:underline">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[var(--gh-accent-fg)] hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--gh-accent-fg)] hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-4">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/Isuranga-2001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--gh-accent-fg)] hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/isuranga-warnasooriya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--gh-accent-fg)] hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://medium.com/@isurangawarnasooriya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--gh-accent-fg)] hover:underline"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--gh-border-default)] text-center text-[var(--gh-fg-muted)] text-sm">
          <p>&copy; {currentYear} Isuranga Warnasooriya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
