import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ieeePublicationLink = "https://ieeexplore.ieee.org/";
const showPublicationLink = false;

const researchGaps = [
  "No multimodal system captures full ASL grammar by combining manual and non-manual markers.",
  "LMC + RGB sensor fusion remains underexplored for linguistically complete SLR.",
  "Cross-modal attention has not been broadly used to align asynchronous hand and facial signals.",
  "Existing pipelines lack uncertainty-aware fusion when one modality degrades.",
];

const frameworkPhases = [
  {
    title: "Phase 1: Cross-Modal Perception",
    description:
      "Fuses Leap Motion 3D hand skeletons with RGB-based face and body cues using a Cross-Modal Attention Transformer. This stage outputs lexical gloss predictions with confidence scores.",
  },
  {
    title: "Phase 2: Symbolic Grammatical Validation",
    description:
      "Applies a Finite State Machine (FSM) to validate sign-order constraints and Non-Manual Marker consistency, then accepts or re-evaluates uncertain sequences.",
  },
  {
    title: "Phase 3: Hybrid Translation and Refinement",
    description:
      "Converts validated gloss sequences into natural language with rule-based templates and a lightweight fallback sequence model for complex utterances.",
  },
];

const contributions = [
  "Proposes a hybrid neuro-symbolic architecture for linguistically complete sign language recognition.",
  "Addresses both lexical and grammatical dimensions of ASL by integrating hand, face, and posture cues.",
  "Introduces a robustness-oriented fusion strategy for real-world sensing conditions.",
  "Frames a practical pathway for future real-time, grammar-aware assistive communication systems.",
];

export default function SignLanguageResearchPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[var(--gh-accent-fg)] hover:underline mb-8"
            >
              ← Back to Projects
            </Link>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-[var(--gh-canvas-default)] border border-[var(--gh-border-default)] rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-bold text-[var(--gh-accent-fg)]">SLR</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-2">
                  Hybrid Sign Language Recognition Framework
                </h1>
                <p className="text-xl text-[var(--gh-accent-fg)] mb-4">
                  ICIPROB 2026 Research Project (IEEE Conference)
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[var(--gh-accent-emphasis)] text-white rounded-full text-sm">
                    Research Project
                  </span>
                  <span className="px-3 py-1 bg-[var(--gh-success-emphasis)] text-white rounded-full text-sm">
                    Best Student Paper Award
                  </span>
                  <span className="px-3 py-1 bg-[var(--gh-canvas-default)] border border-[var(--gh-border-default)] text-[var(--gh-fg-default)] rounded-full text-sm">
                    2025 - 2026
                  </span>
                </div>
                <p className="text-[var(--gh-fg-muted)] max-w-3xl">
                  Initiated during my research exchange period at Shibaura Institute of Technology,
                  this work was submitted to ICIPROB 2026 (4th International Conference on Image
                  Processing and Robotics), held on March 6-7 at Mount Lavinia Hotel, Sri Lanka,
                  and received the Best Student Paper award.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">Research Overview</h2>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed mb-6">
            This research focuses on linguistically complete Sign Language Recognition (SLR), with
            specific attention to American Sign Language (ASL). Existing SLR systems typically focus
            on either camera-based hand and body perception or sensor-based 3D hand tracking, but
            neither stream alone captures the full grammatical structure of sign language.
          </p>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed">
            The proposed system bridges this gap through a hybrid neuro-symbolic framework that
            combines cross-modal deep learning for perception with symbolic grammar validation for
            syntactic correctness. The objective is to improve recognition reliability while preserving
            both lexical meaning and grammatical intent.
          </p>
        </section>

        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-10">Core Research Gaps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchGaps.map((gap) => (
                <div
                  key={gap}
                  className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)]"
                >
                  <p className="text-[var(--gh-fg-muted)] leading-relaxed">{gap}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">Proposed System Diagram</h2>
          <div className="rounded-lg overflow-hidden border border-[var(--gh-border-default)] bg-white">
            <Image
              src="/projects/featured/sign-lang/proposed-diagram.jpg"
              alt="Proposed hybrid neuro-symbolic sign language recognition system"
              width={1600}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-sm text-[var(--gh-fg-muted)] mt-4">
            The system is designed in three stages: cross-modal perception, symbolic grammar
            validation, and hybrid translation/refinement.
          </p>
        </section>

        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-10">Framework Breakdown</h2>
            <div className="space-y-5">
              {frameworkPhases.map((phase) => (
                <div
                  key={phase.title}
                  className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)]"
                >
                  <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-[var(--gh-fg-muted)] leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-10">Key Contributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributions.map((item) => (
              <div
                key={item}
                className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]"
              >
                <p className="text-[var(--gh-fg-muted)] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">Publication and Resources</h2>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-default)]">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <a
                  href="/projects/featured/sign-lang/iciproob-2026-paper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--gh-accent-emphasis)] text-white hover:opacity-90 transition-opacity"
                >
                  View Paper (PDF)
                </a>
              </div>

              <p className="text-[var(--gh-fg-muted)] leading-relaxed mb-2">
                The paper has been presented at ICIPROB 2026 and is expected to be published on IEEE
                Xplore soon. The official publication link will be made visible here once it is available.
              </p>

              {!showPublicationLink && (
                <p className="text-sm text-[var(--gh-fg-muted)]">
                  Status: Pending official IEEE Xplore publication.
                </p>
              )}

              <div className="hidden">
                <a
                  href={ieeePublicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--gh-accent-fg)] hover:underline"
                >
                  IEEE Publication
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 pt-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">Project Award</h2>
          <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]">
            <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">
              Best Student Paper Award - ICIPROB 2026
            </h3>
            <p className="text-[var(--gh-fg-muted)] mb-2">
              4th International Conference on Image Processing and Robotics (IEEE Conference)
            </p>
            <p className="text-[var(--gh-fg-muted)]">
              Presented on March 6-7 at Mount Lavinia Hotel, Sri Lanka.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
