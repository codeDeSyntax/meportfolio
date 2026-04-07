import EffortlessIntegration from "../effortless-integration-updated";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

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

export default function SocialProofTechnologiesSection() {
  const techStack = [
    {
      name: "React.js",
      icon: <FaReact className="h-5 w-5" style={{ color: "#61DAFB" }} />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-5 w-5" style={{ color: "#111111" }} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-5 w-5" style={{ color: "#3178C6" }} />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="h-5 w-5" style={{ color: "#68A063" }} />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="h-5 w-5" style={{ color: "#336791" }} />,
    },
    {
      name: "MERN Backend",
      icon: (
        <span className="flex items-center gap-1">
          <SiMongodb className="h-4 w-4" style={{ color: "#47A248" }} />
          <SiExpress className="h-4 w-4" style={{ color: "#111111" }} />
          <FaNodeJs className="h-4 w-4" style={{ color: "#68A063" }} />
        </span>
      ),
    },
    {
      name: "React Native",
      icon: <SiReact className="h-5 w-5" style={{ color: "#61DAFB" }} />,
    },
  ];

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-146.5 px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
          <Badge
            icon={
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="3"
                  width="4"
                  height="6"
                  stroke="#37322F"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="7"
                  y="1"
                  width="4"
                  height="8"
                  stroke="#37322F"
                  strokeWidth="1"
                  fill="none"
                />
                <rect x="2" y="4" width="1" height="1" fill="#37322F" />
                <rect x="3.5" y="4" width="1" height="1" fill="#37322F" />
                <rect x="2" y="5.5" width="1" height="1" fill="#37322F" />
                <rect x="3.5" y="5.5" width="1" height="1" fill="#37322F" />
                <rect x="8" y="2" width="1" height="1" fill="#37322F" />
                <rect x="9.5" y="2" width="1" height="1" fill="#37322F" />
                <rect x="8" y="3.5" width="1" height="1" fill="#37322F" />
                <rect x="9.5" y="3.5" width="1" height="1" fill="#37322F" />
                <rect x="8" y="5" width="1" height="1" fill="#37322F" />
                <rect x="9.5" y="5" width="1" height="1" fill="#37322F" />
              </svg>
            }
            text="Track Record"
          />
          <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-15 font-sans tracking-tight">
            Work I'm proud to ship
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Projects delivered with clean code, thoughtful UX,
            <br className="hidden sm:block" />
            and measurable outcomes for teams and users.
          </div>
        </div>
      </div>

      <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
        <div className="w-full max-w-265 lg:w-265 px-4 sm:px-6 md:px-8 lg:px-0 py-10 sm:py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-2xl border border-[#E7E2DE] bg-[#FCFBFA] p-5 sm:p-6 md:p-8">
            <div className="text-[#37322F] text-xs sm:text-sm font-medium font-sans uppercase tracking-wide mb-2">
              My core stack
            </div>
            <div className="text-[#49423D] text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight font-sans mb-4">
              Technologies I build with
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="rounded-xl border border-[#E9E4DF] bg-white px-4 py-3 text-[#37322F] text-sm sm:text-base font-medium font-sans flex items-center gap-2.5"
                >
                  <span className="shrink-0" aria-hidden="true">
                    {tech.icon}
                  </span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#E7E2DE] bg-[#F7F5F3] p-5 sm:p-6 md:p-8 flex flex-col justify-start items-start gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                How my stack connects
              </h3>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                Same integration orbit styling as the bento grid, now anchored
                beside the technology list.
              </p>
            </div>
            <div className="w-full h-50 sm:h-62.5 md:h-75 rounded-lg flex overflow-hidden justify-center items-center relative bg-transparent">
              <div className="w-full h-full flex items-center justify-center bg-transparent">
                <EffortlessIntegration
                  width={400}
                  height={250}
                  className="max-w-full max-h-full"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-[#F7F5F3] to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
