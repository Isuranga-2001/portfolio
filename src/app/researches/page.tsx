import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const researches = [
  {
    title: "Hybrid Sign Language Recognition Framework",
    description:
      "Award-winning IEEE conference research proposing a hybrid neuro-symbolic framework for linguistically complete ASL recognition.",
    technologies: ["Computer Vision", "Transformer", "Sensor Fusion", "FSM", "ASL"],
    category: "Research (IEEE)",
    date: "2025 - 2026",
    href: "/researches/sign-lang",
  },
];

export default function ResearchesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-6">
            Researches
          </h1>
          <p className="text-xl text-[var(--gh-fg-muted)] mb-12 max-w-3xl">
            A collection of my academic research, publications, and research projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researches.map((research) => (
              <Link
                key={research.title}
                href={research.href}
                className="group h-full border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-border-muted)] transition-all hover:shadow-lg hover:shadow-[var(--gh-accent-emphasis)]/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-[var(--gh-fg-muted)]">{research.date}</p>
                  <span className="px-2 py-0.5 text-xs font-semibold bg-[var(--gh-accent-emphasis)] text-white rounded">
                    {research.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3 group-hover:text-[var(--gh-accent-fg)] transition-colors">
                  {research.title}
                </h2>
                <p className="text-[var(--gh-fg-muted)] mb-4 leading-relaxed">
                  {research.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {research.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 text-xs font-medium bg-[var(--gh-accent-emphasis)] text-white rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <span className="text-[var(--gh-accent-fg)] font-medium">
                  View research <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
