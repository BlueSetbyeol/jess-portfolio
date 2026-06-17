import { ABOUT } from "../utils/informations";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
      <div style={{ marginBottom: "2.75rem" }}>
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "var(--green)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "0.5rem",
          }}
        >
          01 — About me
        </span>
        <h2
          className="text-[clamp(2rem,5vw,3rem)]"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Who I am
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "clamp(1fr, 55%, 1.1fr) clamp(1fr, 45%, 0.9fr)",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "start",
        }}
      >
        <div>
          {ABOUT.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                color: "var(--muted)",
                marginBottom: "1.2rem",
                fontWeight: 300,
                fontSize: "1rem",
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <div>
          {ABOUT.facts.map(({ label, value, accent }) => (
            <div
              key={label}
              style={{
                display: "grid",
                gridTemplateColumns: "90px 1fr",
                padding: "0.9rem 0",
                borderBottom: "1px solid rgba(26,23,20,0.08)",
                alignItems: "baseline",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--muted)",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: "0.9rem",
                  color: accent ? "var(--green)" : "var(--fg)",
                  fontWeight: accent ? 500 : 400,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
