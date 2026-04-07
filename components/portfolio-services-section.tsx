"use client";

export default function PortfolioServicesSection() {
  const cards = [
    {
      title: "Mobile apps",
      description:
        "Cross-platform product experiences built for speed, clarity, and daily user workflows.",
      category: "Engineering focus",
      tech: "React Native, TypeScript, API Integration",
      outcomes: [
        "Smooth navigation flows",
        "Performant interactions",
        "Production-ready app architecture",
      ],
    },
    {
      title: "Desktop development",
      description:
        "Robust dashboard and tool interfaces optimized for internal teams and power users.",
      category: "Engineering focus",
      tech: "Electron, React, Node.js",
      outcomes: [
        "Data-rich interface systems",
        "Reliable operational tooling",
        "Consistent design behavior",
      ],
    },
    {
      title: "Web applications",
      description:
        "Modern web products from marketing surfaces to authenticated app experiences.",
      category: "Engineering focus",
      tech: "Next.js, React, Tailwind CSS",
      outcomes: [
        "Scalable application foundations",
        "Clean component architecture",
        "Fast, accessible user journeys",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-146.5 px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          {/* Section Badge */}
          <div className="px-3.5 py-1.5 bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="#37322F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
              Focus areas
            </div>
          </div>

          {/* Title */}
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-15 font-sans tracking-tight">
            Where I add the most value
          </div>

          {/* Description */}
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Same design language, now focused on the core platforms
            <br />I build across mobile, desktop, and web applications.
          </div>
        </div>
      </div>

      {/* Focus Cards Section */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="flex justify-center items-start w-full">
          {/* Left Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-40.5 -left-14.5 -top-30 absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 -rotate-45 origin-top-left outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>

          {/* Focus Cards Container */}
          <div className="flex-1 flex flex-col md:flex-row justify-center items-center gap-6 py-12 md:py-0">
            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 border border-[#E0DEDB] overflow-hidden flex flex-col justify-start items-start gap-12 bg-[rgba(255,255,255,0)]">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans">
                    {cards[0].title}
                  </div>
                  <div className="w-full max-w-60.5 text-[rgba(41,37,35,0.70)] text-sm font-normal leading-5 font-sans">
                    {cards[0].description}
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-15 flex items-center text-[#37322F] text-4xl font-medium leading-15 font-serif">
                      {cards[0].category}
                    </div>
                    <div className="text-[#847971] text-sm font-medium font-sans">
                      Tech: {cards[0].tech}
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-2.5 relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center">
                  <div className="w-full h-10.25 absolute left-0 top-[-0.5px] bg-linear-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="max-w-27 flex justify-center flex-col text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                    Explore area
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {cards[0].outcomes.map((feature, index) => (
                  <div
                    key={index}
                    className="self-stretch px-3 py-2 rounded-md bg-[rgba(55,50,47,0.04)] text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 bg-[#37322F] border border-[rgba(55,50,47,0.12)] overflow-hidden flex flex-col justify-start items-start gap-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-[#FBFAF9] text-lg font-medium leading-7 font-sans">
                    {cards[1].title}
                  </div>
                  <div className="w-full max-w-60.5 text-[#B2AEA9] text-sm font-normal leading-5 font-sans">
                    {cards[1].description}
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-15 flex items-center text-[#F0EFEE] text-4xl font-medium leading-15 font-serif">
                      {cards[1].category}
                    </div>
                    <div className="text-[#D2C6BF] text-sm font-medium font-sans">
                      Tech: {cards[1].tech}
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-2.5 relative bg-[#FBFAF9] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center">
                  <div className="w-full h-10.25 absolute left-0 top-[-0.5px] bg-linear-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="max-w-27 flex justify-center flex-col text-[#37322F] text-[13px] font-medium leading-5 font-sans">
                    Explore area
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {cards[1].outcomes.map((feature, index) => (
                  <div
                    key={index}
                    className="self-stretch px-3 py-2 rounded-md bg-[rgba(255,255,255,0.08)] text-[#F0EFEE] text-[12.5px] font-normal leading-5 font-sans"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 bg-white border border-[#E0DEDB] overflow-hidden flex flex-col justify-start items-start gap-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans">
                    {cards[2].title}
                  </div>
                  <div className="w-full max-w-60.5 text-[rgba(41,37,35,0.70)] text-sm font-normal leading-5 font-sans">
                    {cards[2].description}
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-15 flex items-center text-[#37322F] text-4xl font-medium leading-15 font-serif">
                      {cards[2].category}
                    </div>
                    <div className="text-[#847971] text-sm font-medium font-sans">
                      Tech: {cards[2].tech}
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-2.5 relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center">
                  <div className="w-full h-10.25 absolute left-0 top-[-0.5px] bg-linear-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="max-w-27 flex justify-center flex-col text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                    Explore area
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {cards[2].outcomes.map((feature, index) => (
                  <div
                    key={index}
                    className="self-stretch px-3 py-2 rounded-md bg-[rgba(55,50,47,0.04)] text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-40.5 -left-14.5 -top-30 absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 -rotate-45 origin-top-left outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
