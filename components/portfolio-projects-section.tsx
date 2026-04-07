"use client";

import type React from "react";

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-3.5 py-1.5 bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)]">
      <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">
        {icon}
      </div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  );
}

type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  noImage?: boolean;
  projectLink?: string;
  tag: string;
};

function getDisplayLink(url: string) {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname === "/" ? "" : parsed.pathname;
    return `${parsed.hostname}${path}`;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

function ProjectImageFallback({ title }: { title: string }) {
  return (
    <div className="w-full h-full rounded-lg bg-[#F7F5F3] border border-[#E7E2DE] overflow-hidden relative">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 600 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="projectPatternGrid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path d="M28 0H0V28" stroke="rgba(55,50,47,0.12)" strokeWidth="1" />
          </pattern>
          <linearGradient
            id="projectPatternGlow"
            x1="0"
            y1="0"
            x2="600"
            y2="360"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FCFBFA" />
            <stop offset="1" stopColor="#F0ECE9" />
          </linearGradient>
        </defs>
        <rect width="600" height="360" fill="url(#projectPatternGlow)" />
        <rect width="600" height="360" fill="url(#projectPatternGrid)" />
        <circle cx="470" cy="95" r="74" fill="rgba(55,50,47,0.06)" />
        <circle cx="120" cy="290" r="88" fill="rgba(55,50,47,0.05)" />
      </svg>

      <div className="relative z-10 w-full h-full flex items-end p-4 sm:p-5">
        <div className="px-2.5 py-1 rounded-full border border-[#D9D3CE] bg-white/80 backdrop-blur-xs text-[#605A57] text-[10px] font-medium font-sans">
          {title}
        </div>
      </div>
    </div>
  );
}

const PROJECTS: Project[] = [
  {
    id: "Betaforge",
    title: "Betaforge",
    description:
      "Enterprise learning platform with powerful APIs and multi-tenant infrastructure for educational institutions",
    image:
      "https://res.cloudinary.com/dlhyawc5e/image/upload/v1775559786/betaforge_zrw6lx.png",
    tag: "Web application",
    projectLink: "https://betaforge-two.vercel.app/",
  },
  {
    id: "MessageAbcs",
    title: "MessageAbcs",
    description:
      "A biblical messaging app built to help users read, understand biblical truths, either untold or misinterpreted",
    image:
      "https://res.cloudinary.com/dlhyawc5e/image/upload/v1775560676/messageabcs_u3ncxm.png",
    tag: "Web application",
    projectLink: "https://messageabcs.vercel.app/",
  },
  {
    id: "Wingrid",
    title: "Wingrid",
    description:
      "A multi window capture and aggregation tool for window Projection and window sharing - built to support presentation across multiple applications and screens.",
    noImage: true,
    tag: "Desktop platform",
    projectLink: "No link available",
  },

  {
    id: "SongCast",
    title: "SongCast",
    description:
      "A Desktop application for managing songs lyrics and presenting songs in a very professional display.",

    image:
      "https://res.cloudinary.com/dlhyawc5e/image/upload/v1775561158/songapp_vzkyn1.png",
    tag: "Desktop platform",
    projectLink: "https://github.com/codeDeSyntax/EV-Songapp",
  },
];

export default function PortfolioProjectsSection() {
  return (
    <section className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-265 lg:w-265 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-154 lg:w-154 px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
            }
            text="Featured Projects"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-15 font-sans tracking-tight">
            Selected projects I've built
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Each block captures a shipped product, its purpose,
            <br />
            and the kind of user value it delivers.
          </div>
        </div>
      </div>

      <div className="self-stretch flex justify-center items-start">
        <div className="w-full max-w-265 lg:w-265">
          <div className="self-stretch flex justify-center items-start">
            <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
              <div className="w-30 sm:w-35 md:w-40.5 -left-10 sm:-left-12.5 md:-left-14.5 -top-30 absolute flex flex-col justify-start items-start">
                {Array.from({ length: 200 }).map((_, i) => (
                  <div
                    key={`left-rail-${i}`}
                    className="self-stretch h-3 sm:h-4 -rotate-45 origin-top-left outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
              {PROJECTS.map((project, index) => {
                const isLast = index === PROJECTS.length - 1;
                const isOddCount = PROJECTS.length % 2 !== 0;
                const spanTwoColumns = isLast && isOddCount;

                return (
                  <article
                    key={project.id}
                    className={`p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-[#FCFBFA] border-[rgba(55,50,47,0.12)] border-b ${
                      index % 2 === 0 ? "md:border-r" : ""
                    } ${spanTwoColumns ? "md:col-span-2 md:border-r-0" : ""}`}
                  >
                    <div className="w-full aspect-video rounded-lg bg-[#F7F5F3] overflow-hidden">
                      {project.noImage || !project.image ? (
                        <ProjectImageFallback title={project.title} />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div className="w-full flex items-center justify-between gap-3">
                      <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                        {project.title}
                      </h3>
                      <div className="px-2.5 py-1 rounded-full border border-[#D9D3CE] bg-[#F7F5F3] text-[#605A57] text-[10px] font-medium font-sans">
                        {project.tag}
                      </div>
                    </div>

                    <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {project.projectLink ? (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium font-sans text-[#4F4946] hover:text-[#1F1B19] transition-colors max-w-full"
                      >
                        <span className="truncate">
                          {getDisplayLink(project.projectLink)}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="shrink-0"
                        >
                          <path
                            d="M14 3H21V10"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 14L21 3"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 14V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H10"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    ) : null}

                    <div className="text-[#7A746F] text-xs font-normal font-sans">
                      Project {String(index + 1).padStart(2, "0")}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
              <div className="w-30 sm:w-35 md:w-40.5 -left-10 sm:-left-12.5 md:-left-14.5 -top-30 absolute flex flex-col justify-start items-start">
                {Array.from({ length: 200 }).map((_, i) => (
                  <div
                    key={`right-rail-${i}`}
                    className="self-stretch h-3 sm:h-4 -rotate-45 origin-top-left outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
