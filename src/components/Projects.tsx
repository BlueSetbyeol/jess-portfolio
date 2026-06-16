import { useState } from "react";
import type { BannerVariant } from "../utils/types";
import { PROJECTS } from "../utils/informations";

const bannerBg: Record<BannerVariant, string> = {
  accent: "var(--accent-light)",
  green: "var(--green-light)",
  blue: "#e8eefb",
};

const circleColor: Record<BannerVariant, string> = {
  accent: "var(--accent)",
  green: "var(--green)",
  blue: "#3a7bd5",
};

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
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
          04 — Projects
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
          What I've built
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {PROJECTS.map((project, i) => (
          <div
            className="translate-y-0 hover:-translate-y-0.75 border-1.5 rounded-4 border-muted hover:border-accent bg-muted overflow-hidden transition-[transform,border-color] duration-[250ms]"
            key={project.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Banner */}
            <div
              style={{
                height: "150px",
                display: "flex",
                alignItems: "flex-end",
                padding: "1.25rem",
                position: "relative",
                overflow: "hidden",
                background: bannerBg[project.banner],
              }}
            >
              {/* Decorative circle */}
              <div
                style={{
                  position: "absolute",
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                  background: circleColor[project.banner],
                  opacity: 0.35,
                  top: "-50px",
                  right: "-40px",
                }}
              />

              {/* Stack chips */}
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "0.65rem",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      padding: "3px 9px",
                      borderRadius: "100px",
                      letterSpacing: "0.04em",
                      background: "rgba(255,255,255,0.65)",
                      color: "var(--fg)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "1.25rem 1.5rem" }}>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  marginBottom: "0.4rem",
                }}
              >
                {project.title}
              </div>
              <p
                style={{
                  fontSize: "0.83rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  fontWeight: 300,
                  marginBottom: "1rem",
                }}
              >
                {project.description}
              </p>

              <div style={{ display: "flex", gap: "0.6rem" }}>
                <a
                  href={project.liveUrl}
                  style={{
                    fontSize: "0.75rem",
                    textDecoration: "none",
                    padding: "0.3rem 0.85rem",
                    borderRadius: "100px",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    background: "var(--fg)",
                    color: "var(--bg1)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--fg)")
                  }
                >
                  Live ↗
                </a>
                <a
                  href={project.githubUrl}
                  style={{
                    fontSize: "0.75rem",
                    textDecoration: "none",
                    padding: "0.3rem 0.85rem",
                    borderRadius: "100px",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    border: "1.5px solid rgba(26,23,20,0.15)",
                    color: "var(--fg)",
                    transition: "border-color 0.15s, color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--green)";
                    e.currentTarget.style.color = "var(--green)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(26,23,20,0.15)";
                    e.currentTarget.style.color = "var(--fg)";
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
