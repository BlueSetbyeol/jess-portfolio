import React, { useState } from "react";

type BannerVariant = "accent" | "green" | "blue";

interface Project {
  title: string;
  description: string;
  stack: string[];
  banner: BannerVariant;
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    title: "City Canva",
    description:
      "A student project that aim to accompany you on your trail through the streets of the world. Identify the city you want to visit and discover the superbe sight of Street Art.",
    stack: ["React", "TypeScript", "Express js", "Leaflet map"],
    banner: "accent",
    liveUrl: "https://new-city-canvas.jessica-couble.com/",
    githubUrl: "https://github.com/BlueSetbyeol/New_City_Canvas",
  },
  {
    title: "Pokemonster S.A.P.",
    description:
      "A project made as a fun little test to learn Next js. The aim would be to save pokemon and help them find a good home in a world of trading little monster for fun. A bit like a shelter.",
    stack: ["Next js", "Tailwind"],
    banner: "green",
    liveUrl: "https://pokemonster-eta.vercel.app/",
    githubUrl: "https://github.com/BlueSetbyeol/pokemonster_sap",
  },
  {
    title: "WikiData",
    description:
      "As a voluntary help, I took part in this project as a Front End developper and helped build it up to today's state. Working with a real and experienced Backend developper as well as a client kind of partener was a new and rich experience that I very much appreciated. The aim of the web app was to help French people answer to their questions regarding numbers and stats on certain element. We sadly had to stop without completing the idea as less and less volunteer were able to give time.",
    stack: ["React js", "CSS", "Material UI"],
    banner: "blue",
    liveUrl: "https://wikidata.onrender.com/",
    githubUrl: "https://github.com/association-work/stats_visualiser",
  },
  {
    title: "Featzy",
    description:
      "A short description of what this app does and why it matters. Describe the problem it solves and what you learned.",
    stack: ["React js", "Tailwind", "ShadCN", "Google map", "Auth0"],
    banner: "blue",
    liveUrl: "#",
    githubUrl: "https://github.com/BlueSetbyeol/featzy_front",
  },
  {
    title: "Simply Fact",
    description:
      "A short description of what this app does and why it matters. Describe the problem it solves and what you learned.",
    stack: ["Laravel", "React", "Material UI", "S3"],
    banner: "blue",
    liveUrl: "#",
    githubUrl: "https://github.com/BlueSetbyeol/simplyfact",
  },
];

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

const Projects: React.FC = () => {
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
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
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
            key={project.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border:
                hovered === i
                  ? "1.5px solid var(--accent)"
                  : "1.5px solid rgba(26,23,20,0.09)",
              background: "var(--bg1)",
              transform: hovered === i ? "translateY(-3px)" : "translateY(0)",
              transition: "transform 0.25s, border-color 0.25s",
            }}
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
};

export default Projects;
