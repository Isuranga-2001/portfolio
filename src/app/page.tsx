"use client";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MouseEvent, useEffect, useState } from "react";
import GithubStatusPopup from "@/components/GithubStatusPopup";
import ImageCard from "@/components/ImageCard";
import EventComponent, { EventDetails } from "@/components/EventComponent";
import Card from "@/components/Card";
import { featuredProjects } from "@/data/featuredProjects";

export default function Home() {
  const [showGithubStatus, setShowGithubStatus] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);

  const events: EventDetails[] = [
    {
      "id": "iciproob-2026",
      "name": "ICIPROoB2026 Conference Presenter & Award Winner",
      "date": "2026",
      "location": "ICIPROoB2026 Conference",
      "coverImage": "/events/iciproob-2026/img (1).jpg",
      "description": "Participated in the ICIPROoB2026 conference where I presented my research project titled 'Hybrid Sensor-Fusion Approaches for ASL Recognition' and was honored with a student paper award. The research involved proposing a hybrid sensor-fusion framework that combined a Leap Motion Controller (LMC) and RGB cameras specifically for American Sign Language (ASL) recognition. The core focus of this work was addressing the 'information bottleneck' commonly found in unimodal systems by successfully integrating manual gestures with non-manual markers. To further improve accuracy and handle asynchronous data streams, I suggested the implementation of a Cross-Modal Attention architecture. This milestone heavily utilized my skills in Deep Learning, Sensor Fusion, LMC, and Computer Vision.",
      "images": [
        "/events/iciproob-2026/img (1).jpg",
        "/events/iciproob-2026/img (2).jpg",
        "/events/iciproob-2026/img (3).jpg",
        "/events/iciproob-2026/img (4).jpg",
        "/events/iciproob-2026/img (5).jpg"
      ]
    },
    {
      "id": "research-japan",
      "name": "Research Exchange at Shibaura Institute of Technology",
      "date": "2025",
      "location": "Toyosu, Tokyo, Japan",
      "coverImage": "/events/research-japan/img (5).jpg",
      "description": "Served as a Visiting Research Scholar at the Shibaura Institute of Technology (Toyosu) in Tokyo, Japan. This international research experience allowed me to delve deeply into advanced computer vision, deep learning, and practical research collaboration in an international lab environment. During my time associated with SIT, I worked on a research project titled 'Hybrid Sensor-Fusion Approaches for ASL Recognition'. My work focused on addressing the limitations of existing systems, specifically the 'information bottleneck' of unimodal systems, by integrating manual gestures with non-manual markers to enhance recognition capabilities.",
      "images": [
        "/events/research-japan/img (1).jpg",
        "/events/research-japan/img (2).jpg",
        "/events/research-japan/img (3).jpg",
        "/events/research-japan/img (4).jpg",
        "/events/research-japan/img (5).jpg"
      ]
    },
    {
      "id": "wso2-internship",
      "name": "Intern Software Engineer at WSO2",
      "date": "Feb 2025 - July 2025",
      "location": "WSO2 LLC",
      "coverImage": "/events/wso2-internship/img (2).jpg",
      "description": "Worked as an Intern Software Engineer at WSO2 LLC. During my tenure, I contributed significantly to open-source healthcare solution development utilizing Ballerina and Java. I gained extensive hands-on experience working with cutting-edge technologies including HAPI-FHIR, WSO2 Choreo, GitHub Actions, and React. My primary projects involved developing a FHIR Terminology Service for the Open Healthcare initiative to manage and perform healthcare terminology-based operations, where I utilized Ballerina for backend logic and integrated the system with Choreo for seamless cloud deployment. Additionally, I developed a Ballerina connector for HubSpot CRM as part of my onboarding, which involved writing comprehensive test cases and creating detailed documentation.",
      "images": [
        "/events/wso2-internship/img (2).jpg",
        "/events/wso2-internship/img (3).jpg",
        "/events/wso2-internship/img (4).jpg",
      ]
    }
  ];

  const highlights = [
    {
      title: "Visiting Research Scholar",
      subtitle: "Shibaura Institute of Technology, Japan",
      description: "Conducted research on Sign Language Detection using Leap Motion Controllers and Computer Vision.",
      date: "Sep 2025 - Oct 2025",
      href: "/education",
      icon: "globe",
    },
    {
      title: "Intern Software Engineer",
      subtitle: "WSO2",
      description:
        "Contributed to the Open Healthcare repository, implementing FHIR standards and enhancing interoperability for global healthcare systems.",
      date: "Feb 2025 - July 2025",
      href: "/experience/wso2",
      icon: "briefcase",
    },
    {
      title: "Full Stack Developer (Part-time)",
      subtitle: "Hypercube Labs",
      description: "Full Stack Developer building robust web applications for clients.",
      date: "Jan 2024 - Nov 2024",
      href: "/experience/hypercube",
      icon: "code",
    },
    {
      title: "Freelance App Developer",
      subtitle: "Self-Employed",
      description: "Developed desktop applications for government and corporate clients.",
      date: "Dec 2020 - Aug 2022",
      href: "/experience/freelance",
      icon: "laptop",
    },
  ];

  const openEvent = (event: EventDetails) => {
    setSelectedEvent(event);
    setShowEventPopup(true);
  };

  const closeEvent = () => {
    setShowEventPopup(false);
    setSelectedEvent(null);
  };

  useEffect(() => {
    if (events.length <= 3) return;

    const intervalId = setInterval(() => {
      setCarouselStartIndex((prev) => (prev + 1) % events.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [events.length]);

  const visibleEvents =
    events.length > 3
      ? [
          events[carouselStartIndex % events.length],
          events[(carouselStartIndex + 1) % events.length],
          events[(carouselStartIndex + 2) % events.length],
        ]
      : events;

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
              <p className="text-xl sm:text-2xl font-bold mb-8 leading-relaxed">
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

        {/* Career Highlights Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">Career Highlights</h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[var(--gh-border-default)]"></div>
            <div className="space-y-12">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 bg-[var(--gh-accent-emphasis)] rounded-full border-4 border-[var(--gh-canvas-default)] z-10 flex items-center justify-center">
                    {highlight.icon === "briefcase" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {highlight.icon === "trophy" && (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 15c-1.5 0-2.75-1-3.25-2.5H5c0 2.5 2.5 4.5 5 5.5v3H8v2h8v-2h-2v-3c2.5-1 5-3 5-5.5h-3.75c-.5 1.5-1.75 2.5-3.25 2.5zM5 5h2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2h2c1.1 0 2 .9 2 2v2c0 1.54-.73 2.91-1.86 3.79A4.997 4.997 0 0117 12.5h-1c0 1.93-1.57 3.5-3.5 3.5h-1c-1.93 0-3.5-1.57-3.5-3.5H7a4.997 4.997 0 01-2.14-.71C3.73 10.91 3 9.54 3 8V7c0-1.1.9-2 2-2zm0 2v1c0 .83.4 1.57 1.02 2.03.37-.91.92-1.72 1.62-2.38-.22-.36-.44-.71-.64-1.07V5H5v2zm14-2v1.58c-.2.36-.42.71-.64 1.07.7.66 1.25 1.47 1.62 2.38A2.49 2.49 0 0021 8V7h-2z" />
                      </svg>
                    )}
                    {highlight.icon === "globe" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {highlight.icon === "code" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {highlight.icon === "laptop" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>

                  <div className={`flex-1 pl-14 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Link href={highlight.href} className="block group">
                      <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
                        <div className="text-sm text-[var(--gh-fg-muted)] mb-2">{highlight.date}</div>
                        <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-1 group-hover:text-[var(--gh-accent-fg)] transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-[var(--gh-accent-fg)] mb-3">{highlight.subtitle}</p>
                        <p className="text-[var(--gh-fg-muted)]">{highlight.description}</p>
                      </div>
                    </Link>
                  </div>

                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)]">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-[var(--gh-accent-fg)] hover:text-[var(--gh-accent-emphasis)] font-medium transition-colors"
            >
              View All Projects
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                category={project.category}
                date={project.date}
                href={project.href}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </section>

        {/* Memories and Events Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-4">Milestones</h2>
          <p className="text-[var(--gh-fg-muted)] mb-10 max-w-3xl">
            Milestones from research, conferences, and engineering experiences that shaped my journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleEvents.map((event) => (
              <ImageCard key={event.id} title={event.name} image={event.coverImage} onClick={() => openEvent(event)} />
            ))}
          </div>
        </section>

        {/* CV Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="rounded-2xl border border-[var(--gh-border-default)] bg-[var(--gh-canvas-subtle)] p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gh-fg-default)] mb-3">
                  CV & Availability
                </h2>
                <p className="text-[var(--gh-fg-muted)] leading-relaxed">
                  Explore my resume for detailed experience, technical skills, research work, and achievements.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 bg-[var(--gh-accent-emphasis)] text-white rounded-lg font-medium hover:bg-[var(--gh-accent-fg)] transition-colors"
                >
                  View CV
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center px-5 py-3 border border-[var(--gh-border-default)] text-[var(--gh-fg-default)] rounded-lg font-medium hover:bg-[var(--gh-canvas-default)] transition-colors"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="rounded-2xl border border-[var(--gh-border-default)] bg-[var(--gh-canvas-subtle)] p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gh-fg-default)] mb-4">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-[var(--gh-fg-muted)] mb-8 max-w-2xl mx-auto">
              Have an idea, collaboration, or opportunity in mind? Reach out and let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[var(--gh-accent-emphasis)] text-white rounded-lg font-medium hover:bg-[var(--gh-accent-fg)] transition-colors"
            >
              Go To Contact Page
            </Link>
          </div>
        </section>

        <EventComponent event={selectedEvent} isOpen={showEventPopup} onClose={closeEvent} />

      </div>
      <Footer />
    </>
  );
}

