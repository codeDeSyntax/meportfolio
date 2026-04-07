import type { ReactNode } from "react";

const PROFILE_IMAGE_URL =
  "https://res.cloudinary.com/dlhyawc5e/image/upload/v1775563035/me_llgvug.png";

type GitHubRepoRow = {
  name: string;
  stars: string;
  commits: string;
};

export type GitHubDashboardView = {
  heading: string;
  metricLabel: string;
  metricValue: string;
  secondaryLabel: string;
  secondaryValue: string;
  chartPoints: number[];
  repoRows: GitHubRepoRow[];
};

function FeatureCard({
  title,
  description,
  isActive,
  onClick,
}: {
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 text-left ${
        isActive
          ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
          : "border-l-0 border-r-0 md:border border-[#E0DEDB]/80"
      }`}
      onClick={onClick}
    >
      <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-5.5 md:leading-5.5 font-sans">
        {description}
      </div>
    </button>
  );
}

function DashboardHeader({ githubUsername }: { githubUsername: string }) {
  return (
    <div className="px-4 sm:px-5 md:px-6 py-4 flex items-center justify-between border-b border-[#ECE7E3]">
      <div>
        <div className="text-[#37322F] text-xs sm:text-sm md:text-base font-medium font-sans">
          GitHub Overview
        </div>
        <div className="text-[#605A57] text-[10px] sm:text-xs font-normal font-sans">
          Live profile intelligence
        </div>
      </div>
      <div className="text-[#605A57] text-[11px] sm:text-xs md:text-sm font-normal font-sans">
        @{githubUsername}
      </div>
    </div>
  );
}

export default function HeroGitHubSection({
  githubUsername,
  dashboardDataStatus,
  githubDashboardViews,
  activeCard,
  onCardChange,
}: {
  githubUsername: string;
  dashboardDataStatus: string;
  githubDashboardViews: GitHubDashboardView[];
  activeCard: number;
  onCardChange: (index: number) => void;
}) {
  const currentView = githubDashboardViews[activeCard];

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-54 pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
      <div className="w-full max-w-234.25 lg:w-234.25 flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          <div className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#37322F] text-[30px] xs:text-[54px] sm:text-[44px] md:text-[52px] lg:text-[80px] font-normal leading-[1.05] sm:leading-[1.12] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0">
            Hi, I'm Josiah - I build
            <br />
            software people rely on
          </div>
          <div className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-normal lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
            I care about clean code, thoughtful product decisions,
            <br className="hidden sm:block" />
            and shipping web, mobile, and backend systems that last.
          </div>
          <div className="w-full flex justify-center items-center pt-1 sm:pt-2">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 rounded-full overflow-hidden border border-[#D9D3CE] shadow-[0px_6px_18px_rgba(55,50,47,0.16)] bg-white">
              <img
                src={PROFILE_IMAGE_URL}
                alt="Josiah profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-124.25 lg:w-124.25 flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
          <div className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-1.5 relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center">
            <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-10.25 absolute left-0 top-[-0.5px] bg-linear-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
            <div className="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans">
              View my work
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-58 sm:top-62 md:top-66 lg:top-80 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
        <img
          src="/mask-group-pattern.svg"
          alt=""
          className="w-234 sm:w-351 md:w-526.5 lg:w-702 h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
          style={{
            filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
          }}
        />
      </div>

      <div className="w-full max-w-240 lg:w-240 pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
        <div className="w-full max-w-240 lg:w-240 h-50 sm:h-70 md:h-112.5 lg:h-[695.55px] bg-white border border-[#E7E2DE] overflow-hidden rounded-[6px] sm:rounded-xl lg:rounded-[9.06px] flex flex-col justify-start items-start">
          <div className="self-stretch flex-1 flex justify-start items-start">
            <div className="w-full h-full p-3 sm:p-4 md:p-6 lg:p-4 bg-[#F7F5F3]">
              <div className="h-full rounded-2xl bg-[#FCFBFA] overflow-hidden flex flex-col border border-[#ECE7E3]">
                <DashboardHeader githubUsername={githubUsername} />

                <div className="flex-1 px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-3 sm:gap-4">
                  <div className="p-4 sm:p-5 flex flex-col gap-4">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <div className="text-[#37322F] text-sm sm:text-base md:text-lg font-medium font-sans">
                          {currentView.heading}
                        </div>
                        <div className="text-[#605A57] text-[11px] sm:text-xs md:text-sm font-normal font-sans">
                          Ranked signal from your top repositories
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-2">
                        <span className="px-2 py-1 rounded-full bg-[#F4F1EE] text-[#5B5552] text-[10px] font-medium font-sans">
                          Repos
                        </span>
                      </div>
                    </div>

                    <div className="h-24 sm:h-28 md:h-32 flex items-end gap-2">
                      {currentView.chartPoints.map((point, index) => (
                        <div key={index} className="flex-1 flex items-end">
                          <div
                            className="w-full rounded-t-md bg-[#4A433F]"
                            style={{ height: `${point}%` }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 pt-1">
                      {currentView.repoRows.map((repo) => (
                        <div
                          key={repo.name}
                          className="flex items-center justify-between border-b border-[#EEE9E5] pb-2"
                        >
                          <div className="text-[#37322F] text-xs sm:text-sm font-medium font-sans capitalize truncate">
                            {repo.name}
                          </div>
                          <div className="text-[#6B6561] text-[10px] sm:text-xs font-normal font-sans">
                            {repo.stars} stars
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-[#ECE7E3]">
                    <div>
                      <div className="text-[#706A66] text-[10px] sm:text-xs font-normal font-sans uppercase tracking-wide">
                        {currentView.metricLabel}
                      </div>
                      <div className="text-[#2F2A27] text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight font-sans">
                        {currentView.metricValue}
                      </div>
                    </div>
                    <div>
                      <div className="text-[#706A66] text-[10px] sm:text-xs font-normal font-sans uppercase tracking-wide">
                        {currentView.secondaryLabel}
                      </div>
                      <div className="text-[#37322F] text-lg sm:text-xl md:text-2xl font-medium leading-tight font-sans">
                        {currentView.secondaryValue}
                      </div>
                    </div>
                    <div className="mt-auto text-[#6E6763] text-[10px] sm:text-xs font-normal font-sans leading-relaxed">
                      {dashboardDataStatus}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-240 grid grid-cols-1 md:grid-cols-3 border border-[#E7E2DE] rounded-xl overflow-hidden bg-[#FCFBFA]">
          <FeatureCard
            title="Showcase"
            description="Featured project previews and case studies"
            isActive={activeCard === 0}
            onClick={() => onCardChange(0)}
          />
          <FeatureCard
            title="Insights"
            description="Performance insights and product thinking"
            isActive={activeCard === 1}
            onClick={() => onCardChange(1)}
          />
          <FeatureCard
            title="Workflow"
            description="Collaboration flow from idea to shipped product"
            isActive={activeCard === 2}
            onClick={() => onCardChange(2)}
          />
        </div>
      </div>
    </div>
  );
}
