"use client";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MouseEvent, useState } from "react";
import GithubStatusPopup from "@/components/GithubStatusPopup";

export default function Home() {
  const [showGithubStatus, setShowGithubStatus] = useState(false);

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-[var(--gh-fg-default)] mb-6 leading-tight">
                Hi, I'm <span className="text-[var(--gh-accent-fg)]">Isuranga Warnasooriya</span>
              </h1>
              <p className="text-xl text-[var(--gh-fg-muted)] mb-8 leading-relaxed">
                Final Year IT Undergraduate at University of Moratuwa, Sri Lanka
              </p>
              <p className="text-lg text-[var(--gh-fg-muted)] mb-8 leading-relaxed">
                Passionate about Full Stack Development with expertise in Node.js, .NET, React, and Angular. 
                I build scalable web applications and contribute to open-source healthcare solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                <a
                  href="https://github.com/Isuranga-2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/isuranga-warnasooriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://medium.com/@isurangawarnasooriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                  aria-label="Medium"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:isurangawarnasooriya@outlook.com"
                  className="text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/experience"
                  className="px-6 py-3 bg-[var(--gh-accent-emphasis)] text-white rounded-lg font-medium hover:bg-[var(--gh-accent-fg)] transition-colors"
                >
                  Experience
                </Link>
                <Link
                  href="/projects"
                  className="px-6 py-3 border border-[var(--gh-border-default)] text-[var(--gh-fg-default)] rounded-lg font-medium hover:bg-[var(--gh-canvas-subtle)] transition-colors"
                >
                  My Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-[var(--gh-border-default)] text-[var(--gh-fg-default)] rounded-lg font-medium hover:bg-[var(--gh-canvas-subtle)] transition-colors"
                >
                  Contact Me
                </Link>
                <Link
                  href="#"
                  onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    setShowGithubStatus(true);
                  }}
                  className="px-1 py-1 text-[var(--gh-accent-fg)] font-medium hover:text-[var(--gh-accent-emphasis)] transition-colors"
                  style={{ cursor: 'pointer' }}
                >
                  View GitHub Status
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/profile.jpg"
                alt="Isuranga Warnasooriya"
                width={430}
                height={430}
                priority
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[var(--gh-canvas-subtle)] py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[var(--gh-accent-fg)] mb-2">7+</div>
                <div className="text-sm md:text-base text-[var(--gh-fg-muted)]">Coding Journey</div>
                <div className="text-xs text-[var(--gh-fg-muted)] opacity-70">Years</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[var(--gh-success-fg)] mb-2">1+</div>
                <div className="text-sm md:text-base text-[var(--gh-fg-muted)]">Industry Experience</div>
                <div className="text-xs text-[var(--gh-fg-muted)] opacity-70">Years</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[var(--gh-attention-fg)] mb-2">5+</div>
                <div className="text-sm md:text-base text-[var(--gh-fg-muted)]">Awards & Honors</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[var(--gh-accent-fg)] mb-2">2</div>
                <div className="text-sm md:text-base text-[var(--gh-fg-muted)]">Research Labs</div>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Status Popup */}
        <GithubStatusPopup open={showGithubStatus} onClose={() => setShowGithubStatus(false)} />

      </div>
      <Footer />
    </>
  );
}

