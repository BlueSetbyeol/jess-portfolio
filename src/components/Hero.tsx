import { HERO } from "../utils/informations";
import type { TagVariant } from "../utils/types";

const tagStyles: Record<TagVariant, React.CSSProperties> = {
  accent: { background: "var(--accent-light)", color: "var(--accent)" },
  green: { background: "var(--green-light)", color: "var(--green)" },
  neutral: { background: "rgba(26,23,20,0.07)", color: "var(--muted)" },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[91vh] flex flex-col justify-center pt-20 pb-16 relative overflow-hidden"
    >
      <div
        className="absolute top-[50%] left-0 right-0 text-transparent whitespace-nowrap tracking-tight pointer-events-none font-extrabold select-none text-[clamp(6rem,20vw,14rem)] -translate-y-1/2"
        style={{
          fontFamily: "'Syne', sans-serif",
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

      <div className="inline-flex items-center gap-3 text-[0.78rem] text-accent-foreground mb-7 relative z-1 uppercase tracking-wide">
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
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "0.92em",
            color: "var(--accent)",
          }}
        >
          {HERO.italic}
        </span>
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          color: "var(--muted)",
          maxWidth: "460px",
          fontWeight: 300,
          marginBottom: "2.5rem",
          lineHeight: 1.85,
          position: "relative",
          zIndex: 1,
        }}
      >
        {HERO.sub}
      </p>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        <a
          href={HERO.ctaPrimary.href}
          style={{
            background: "var(--fg)",
            color: "var(--bg1)",
            border: "none",
            borderRadius: "12px",
            padding: "0.75rem 1.75rem",
            fontSize: "0.875rem",
            fontWeight: 400,
            textDecoration: "none",
            transition: "transform 0.15s, background 0.2s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--accent)";
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
          style={{
            background: "transparent",
            color: "var(--fg)",
            border: "1.5px solid rgba(26,23,20,0.2)",
            borderRadius: "12px",
            padding: "0.75rem 1.75rem",
            fontSize: "0.875rem",
            textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s, transform 0.15s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--green)";
            e.currentTarget.style.color = "var(--green)";
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

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginTop: "2.75rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {HERO.tags.map((tag) => (
          <span
            key={tag.label}
            style={{
              fontSize: "0.73rem",
              padding: "0.3rem 0.85rem",
              borderRadius: "100px",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.04em",
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
