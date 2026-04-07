"use client";

export default function PortfolioCTASection() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2">
      {/* Content */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-12 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full -rotate-45 origin-top-left border border-[rgba(3,7,18,0.08)]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-146.5 px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-14 font-sans tracking-tight">
              Want to build something together?
            </div>
            <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
              I am available for software engineering engagements,
              <br />
              from MVP systems to production-ready platform delivery.
            </div>
          </div>
          <div className="w-full max-w-124.25 flex flex-col justify-center items-center gap-12">
            <div className="flex justify-start items-center gap-4">
              <div className="h-10 px-12 py-1.5 relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors">
                <div className="w-44 h-10.25 absolute left-0 top-0 bg-linear-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                <div className="flex flex-col justify-center text-white text-[13px] font-medium leading-5 font-sans">
                  Let us talk
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
