import React from "react";
const ABOUT = {
  paragraphs: [
    <>
      I'm a new developer, changing career after much experiences in diverses
      area, who fell in love with building things and especially on the web.
      What started as pure curiosity about{" "}
      <strong style={{ color: "var(--fg)", fontWeight: 500 }}>
        how websites actually work
      </strong>{" "}
      became a genuine passion for crafting experiences that feel both intuitive
      and alive.
    </>,
    <>
      I embrace both{" "}
      <strong style={{ color: "var(--fg)", fontWeight: 500 }}>
        manual and AI-assisted
      </strong>{" "}
      but also vibe-coding workflows — Cursor, Claude, prompt engineering — as
      tools in my stack. I believe the best developers leverage everything
      available to think bigger and ship faster.
    </>,
    <>
      Looking for a junior role where I can grow fast, contribute from day one,
      and work alongside a team that cares about quality and craft.
    </>,
  ],
  facts: [
    { label: "Location", value: "Lyon, France", accent: false },
    {
      label: "Background",
      value: "Self-taught + Bootcamp · 2 years",
      accent: false,
    },
    { label: "Focus", value: "Full Stack · AI-assisted dev", accent: false },
    { label: "Languages", value: "French · English · Korean", accent: false },
    {
      label: "Status",
      value: "● Available from 2026, September 1st",
      accent: true,
    },
  ],
};

const About: React.FC = () => {
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
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
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
};

export default About;
