"use client";

import { useEffect, useState } from "react";
import HeroGitHubSection, {
  type GitHubDashboardView,
} from "../components/landing/hero-github-section";
import SocialProofTechnologiesSection from "../components/landing/social-proof-technologies-section";
import PortfolioProjectsSection from "../components/portfolio-projects-section";
import PortfolioTestimonialsSection from "../components/portfolio-testimonials-section";
import PortfolioFAQSection from "../components/portfolio-faq-section";
import PortfolioServicesSection from "../components/portfolio-services-section";
import PortfolioCTASection from "../components/portfolio-cta-section";
import PortfolioFooterSection from "../components/portfolio-footer-section";

type ProfileSummaryResponse = {
  user?: {
    login?: string;
    publicRepos?: number;
    followers?: number;
  };
  repoCommitCount?: Record<string, number>;
  repoStarCount?: Record<string, number>;
  quarterCommitCount?: Record<string, number>;
  langRepoCount?: Record<string, number>;
  langStarCount?: Record<string, number>;
};

function toSafeNumber(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

const defaultGitHubViews: GitHubDashboardView[] = [
  {
    heading: "Contribution trend",
    metricLabel: "Public repositories",
    metricValue: "0",
    secondaryLabel: "Followers",
    secondaryValue: "0",
    chartPoints: [30, 38, 45, 52, 60, 54, 68],
    repoRows: [
      { name: "loading", stars: "0", commits: "0" },
      { name: "loading", stars: "0", commits: "0" },
      { name: "loading", stars: "0", commits: "0" },
    ],
  },
  {
    heading: "Repository health",
    metricLabel: "Open issues",
    metricValue: "0",
    secondaryLabel: "Total stars",
    secondaryValue: "0",
    chartPoints: [26, 34, 42, 48, 56, 62, 70],
    repoRows: [
      { name: "loading", stars: "0", commits: "0" },
      { name: "loading", stars: "0", commits: "0" },
      { name: "loading", stars: "0", commits: "0" },
    ],
  },
  {
    heading: "PR velocity",
    metricLabel: "Merged PRs",
    metricValue: "0",
    secondaryLabel: "Following",
    secondaryValue: "0",
    chartPoints: [20, 28, 36, 44, 52, 60, 68],
    repoRows: [
      { name: "loading", stars: "0", commits: "0" },
      { name: "loading", stars: "0", commits: "0" },
      { name: "loading", stars: "0", commits: "0" },
    ],
  },
];

const CV_DOWNLOAD_URL =
  "https://docs.google.com/document/d/1VJI7MQNyr0xwMVC2uBRSLpEaF_BpXFgeLRsJiawea_k/export?format=pdf";

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0);
  const [githubUsername, setGithubUsername] = useState("codeDeSyntax");
  const [dashboardDataStatus, setDashboardDataStatus] = useState(
    "Loading live GitHub profile summary...",
  );
  const [githubDashboardViews, setGithubDashboardViews] =
    useState<GitHubDashboardView[]>(defaultGitHubViews);

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setActiveCard((current) => (current + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(rotateInterval);
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const wait = (ms: number) =>
      new Promise((resolve) => {
        setTimeout(resolve, ms);
      });

    const loadGitHubStats = async () => {
      for (let attempt = 1; attempt <= 5; attempt += 1) {
        try {
          if (!isCancelled) {
            setDashboardDataStatus(
              `Loading live GitHub profile summary (attempt ${attempt}/5)...`,
            );
          }

          const response = await fetch(
            "/api/profile-summary?username=codeDeSyntax",
            { cache: "no-store" },
          );

          if (!response.ok) {
            if (attempt === 5 && !isCancelled) {
              setDashboardDataStatus(
                `Could not load profile summary (status ${response.status}).`,
              );
            }
            await wait(500 * attempt);
            continue;
          }

          const data: ProfileSummaryResponse = await response.json();
          const repoCommitCount = data.repoCommitCount ?? {};
          const repoStarCount = data.repoStarCount ?? {};
          const quarterCommitCount = data.quarterCommitCount ?? {};
          const langRepoCount = data.langRepoCount ?? {};
          const langStarCount = data.langStarCount ?? {};

          const topRepoEntries = Object.entries(repoCommitCount)
            .sort((a, b) => toSafeNumber(b[1]) - toSafeNumber(a[1]))
            .slice(0, 7);

          const chartSource =
            topRepoEntries.length > 0
              ? topRepoEntries.map((entry) => toSafeNumber(entry[1]))
              : [0, 0, 0, 0, 0, 0, 0];
          const maxChart = Math.max(...chartSource, 1);
          const chartPoints = chartSource.map((value) => {
            const scaled = Math.round((value / maxChart) * 70 + 25);
            return Math.min(95, Math.max(20, scaled));
          });

          while (chartPoints.length < 7) {
            chartPoints.push(20);
          }

          const totalCommits = Object.values(repoCommitCount).reduce(
            (sum, value) => sum + toSafeNumber(value),
            0,
          );
          const totalStars = Object.values(langStarCount).reduce(
            (sum, value) => sum + toSafeNumber(value),
            0,
          );
          const languagesUsed = Object.keys(langRepoCount).length;

          const quarterEntries = Object.entries(quarterCommitCount).sort(
            (a, b) => a[0].localeCompare(b[0]),
          );
          const latestQuarter = quarterEntries[quarterEntries.length - 1];

          const topRepos = topRepoEntries
            .slice(0, 3)
            .map(([name, commits]) => ({
              name,
              stars: String(toSafeNumber(repoStarCount[name] ?? 0)),
              commits: String(toSafeNumber(commits)),
            }));

          while (topRepos.length < 3) {
            topRepos.push({ name: "loading", stars: "0", commits: "0" });
          }

          const hasMeaningfulData =
            totalCommits > 0 ||
            (data.user?.publicRepos ?? 0) > 0 ||
            topRepoEntries.length > 0;

          if (!hasMeaningfulData) {
            await wait(500 * attempt);
            continue;
          }

          if (isCancelled) return;

          setGithubUsername(data.user?.login ?? "codeDeSyntax");
          setGithubDashboardViews([
            {
              heading: "Contribution trend",
              metricLabel: "Total commits",
              metricValue: String(totalCommits),
              secondaryLabel: "Public repos",
              secondaryValue: String(data.user?.publicRepos ?? 0),
              chartPoints,
              repoRows: topRepos,
            },
            {
              heading: "Repository health",
              metricLabel: "Total stars",
              metricValue: String(totalStars),
              secondaryLabel: "Languages used",
              secondaryValue: String(languagesUsed),
              chartPoints,
              repoRows: topRepos,
            },
            {
              heading: "PR velocity",
              metricLabel: latestQuarter ? latestQuarter[0] : "Latest quarter",
              metricValue: String(latestQuarter ? latestQuarter[1] : 0),
              secondaryLabel: "Followers",
              secondaryValue: String(data.user?.followers ?? 0),
              chartPoints,
              repoRows: topRepos,
            },
          ]);
          setDashboardDataStatus("Live data loaded from profile summary.");
          return;
        } catch {
          if (attempt === 5 && !isCancelled) {
            setDashboardDataStatus(
              "Unable to fetch profile summary right now. Showing fallback values.",
            );
          }
          await wait(500 * attempt);
        }
      }
    };

    void loadGitHubStats();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-265 lg:w-265 relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-px h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
          <div className="w-px h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-2.25 overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16.5 relative z-10">
            <div className="w-full h-12 sm:h-14 md:h-16 lg:h-21 absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
              <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-10.5 border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

              <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-175 lg:w-175 h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
                <div className="flex justify-center items-center">
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans">
                      Josiah Ok
                    </div>
                  </div>
                  <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                    <a
                      href="#projects"
                      className="flex justify-start items-center hover:opacity-80 transition-opacity"
                    >
                      <span className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-3.5 font-sans">
                        Projects
                      </span>
                    </a>
                    <a
                      href="#experience"
                      className="flex justify-start items-center hover:opacity-80 transition-opacity"
                    >
                      <span className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-3.5 font-sans">
                        Experience
                      </span>
                    </a>
                    <a
                      href="#contact"
                      className="flex justify-start items-center hover:opacity-80 transition-opacity"
                    >
                      <span className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-3.5 font-sans">
                        Contact
                      </span>
                    </a>
                  </div>
                </div>
                <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
                  <a
                    href={CV_DOWNLOAD_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 sm:px-3 md:px-3.5 py-1 sm:py-1.5 bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center hover:bg-[#F3F0ED] transition-colors"
                    aria-label="Download CV"
                  >
                    <span className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans">
                      Download CV
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <HeroGitHubSection
              githubUsername={githubUsername}
              dashboardDataStatus={dashboardDataStatus}
              githubDashboardViews={githubDashboardViews}
              activeCard={activeCard}
              onCardChange={setActiveCard}
            />

            <SocialProofTechnologiesSection />

            <section id="projects" className="w-full scroll-mt-28">
              <PortfolioProjectsSection />
            </section>

            <PortfolioTestimonialsSection />

            <section id="experience" className="w-full scroll-mt-28">
              <PortfolioServicesSection />
            </section>

            <PortfolioFAQSection />

            <section id="contact" className="w-full scroll-mt-28">
              <PortfolioCTASection />
            </section>

            <PortfolioFooterSection />
          </div>
        </div>
      </div>
    </div>
  );
}
