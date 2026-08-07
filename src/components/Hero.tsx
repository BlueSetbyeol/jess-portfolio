import { HERO } from "../utils/informations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[36vh] flex flex-col justify-center relative overflow-hidden w-full -z-3"
    >
      <div
        className="absolute top-[84%] md:top-[80%] left-0 right-0 text-popover whitespace-nowrap tracking-tight pointer-events-none font-extrabold select-none text-[clamp(10rem,20vw,14rem)] -translate-y-1/2 font-syne"
        style={{
          WebkitTextStroke: "1.5px rgba(26,23,20,0.07)",
          animation: "marquee 22s linear infinite",
        }}
      >
        DEVELOPER · DEVELOPER · DEVELOPER · DEVELOPER · DEVELOPER · DEVELOPER ·
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateY(-50%) translateX(0); }
          to   { transform: translateY(-50%) translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
      `}</style>

      <div className="inline-flex items-center gap-3 text-[0.78rem] text-accent-foreground mb-9 pl-4 relative uppercase tracking-wide">
        <span
          className="w-2 h-2 rounded-[50%] bg-primary inline-block"
          style={{
            animation: "pulse 2.2s ease-in-out infinite",
          }}
        />
        {HERO.eyebrow}
      </div>
    </section>
  );
}
