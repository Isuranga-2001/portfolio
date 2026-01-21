"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Education() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-4">
            Education
          </h1>
          <p className="text-lg text-[var(--gh-fg-muted)] mb-12">
            My academic journey and qualifications
          </p>

          {/* University of Moratuwa */}
          <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)] mb-6">
            <h2 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-2">
              BSc (Hons.) in Information Technology
            </h2>
            <p className="text-[var(--gh-accent-fg)] mb-4">
              Faculty of Information Technology, University of Moratuwa, Sri Lanka
            </p>
            <p className="text-[var(--gh-fg-muted)] mb-4">August 2022 - August 2026 (Expected)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--gh-fg-muted)] mb-4">
              <div>
                <p className="font-medium text-[var(--gh-fg-default)]">Performance</p>
                <p>CGPA: 3.91/4.00 (Up to 5th Semester)</p>
              </div>
              <div>
                <p className="font-medium text-[var(--gh-fg-default)]">Honors</p>
                <p>Dean's List in all 5 semesters (GPAs: 3.89, 3.87, 3.95, 3.96, 3.90)</p>
              </div>
            </div>
            <Link
              href="/transcript.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 py-1 text-[var(--gh-accent-fg)] text-sm font-medium hover:text-[var(--gh-accent-emphasis)] transition-colors"
              style={{ cursor: 'pointer' }}
            >
              View Transcript (Up to 5th Semester)
            </Link>
          </div>

          {/* Shibaura Institute of Technology */}
          <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)] mb-6">
            <h2 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-2">
              Research Exchange Program
            </h2>
            <p className="text-[var(--gh-accent-fg)] mb-4">
              Shibaura Institute of Technology (Toyosu Campus), Tokyo, Japan
            </p>
            <p className="text-[var(--gh-fg-muted)] mb-4">September 2025 - October 2025</p>
            <div>
              <p className="font-medium text-[var(--gh-fg-default)] mb-2">Skills Gained</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                  Computer Vision
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                  Machine Learning
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                  Research Skills
                </span>
              </div>
            </div>
          </div>

          {/* St. Sylvester's College */}
          <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]">
            <h2 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-2">
              Primary/Secondary Education
            </h2>
            <p className="text-[var(--gh-accent-fg)] mb-4">
              St. Sylvester's College, Kandy
            </p>
            <p className="text-[var(--gh-fg-muted)] mb-4">January 2007 - August 2020</p>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium text-[var(--gh-fg-default)] mb-2">Academic Achievements</p>
                <ul className="space-y-1 text-[var(--gh-fg-muted)]">
                  <li>• G.C.E. Advanced Level (2020): Z-Score 1.9762 (Common Stream: Physics, Combined Mathematics and ICT)</li>
                  <li>• G.C.E. Ordinary Level: 6 A passes, 1 B pass, 2 C passes</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[var(--gh-fg-default)] mb-2">Leadership & Activities</p>
                <ul className="space-y-1 text-[var(--gh-fg-muted)]">
                  <li>• President of the College ICT Society (2019/2020)</li>
                  <li>• Editor of the College Astronomical Society (2019/2020)</li>
                  <li>• Member of the College Science Society (2018 - 2020)</li>
                  <li>• Member of the College Gymnastic Team (2007 - 2016)</li>
                  <li>• Member of the College Carrom Team (2015 - 2017)</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[var(--gh-fg-default)] mb-2">Skills Developed</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                    Software Development
                  </span>
                  <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                    Problem Solving
                  </span>
                  <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                    Basic Computer Skills
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
