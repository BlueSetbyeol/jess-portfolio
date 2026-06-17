import { HERO } from "../utils/informations";
import type { TagVariant } from "../utils/types";

const tagStyles: Record<TagVariant, React.CSSProperties> = {
  primary: {
    background: "#fff",
    color: "#000",
  },
  secondary: {
    background: "var(--secondary)",
    color: "var(--primary-foreground)",
  },
  accent: {
    background: "var(--accent)",
    color: "var(--primary-foreground)",
  },
  muted: {
    background: "#B69EEE",
    color: "var(--primary-foreground)",
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[91vh] flex flex-col justify-center pt-20 pb-16 relative overflow-hidden"
    >
      <div
        className="absolute top-[50%] left-0 right-0 text-transparent whitespace-nowrap tracking-tight pointer-events-none font-extrabold select-none text-[clamp(6rem,20vw,14rem)] -translate-y-1/2 font-syne"
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

      <div className="inline-flex items-center gap-3 text-[0.78rem] text-accent-foreground mb-7 pl-4 relative z-1 uppercase tracking-wide">
        <span
          className="w-2 h-2 rounded-[50%] bg-primary inline-block"
          style={{
            animation: "pulse 2.2s ease-in-out infinite",
          }}
        />
        {HERO.eyebrow}
      </div>

      <h1 className="tracking-tight font-extrabold mb-6 relative z-1 leading-[0.95] text-[clamp(3rem,9vw,6.5rem)]">
        {HERO.line1}
        <br />
        {HERO.line2}
        <br />
        <span className="text-[0.92em] text-primary font-medium italic font-mono">
          {HERO.italic}
        </span>
      </h1>

      <p className="text-[1.05em] text-muted-foreground font-light pb-10 relative z-1 px-4 leading-[1.85]">
        {HERO.sub}
      </p>

      <div className="flex flex-wrap relative z-1 gap-2 px-4">
        <a
          href={HERO.ctaPrimary.href}
          className="rounded-[12px] px-7 py-3 border-0 text-[0.875rem] text-primary inline-block bg-muted decoration-0 transition-[transform,background] duration-[150ms,200ms]"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "black";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--fg)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {HERO.ctaPrimary.label}
        </a>
        <a
          href={HERO.ctaSecondary.href}
          className="rounded-[12px] px-7 py-3 border-2 border-background text-[0.875rem] inline-block bg-transparent decoration-0 transition-[border-color,color,transform] duration-[200ms,200ms,150ms]"
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--secondary)";
            e.currentTarget.style.color = "var(--secondary)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(26,23,20,0.2)";
            e.currentTarget.style.color = "var(--fg)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {HERO.ctaSecondary.label}
        </a>
      </div>

      <div className="w-full px-4 flex flex-wrap gap-2 mt-11 relative z-1">
        {HERO.tags.map((tag) => (
          <span
            key={tag.label}
            className="text-[0.73rem] py-[0.3rem] px-[0.85rem] rounded-[100px] font-sans tracking-tighter"
            style={{
              ...tagStyles[tag.variant as TagVariant],
            }}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </section>
  );
}
