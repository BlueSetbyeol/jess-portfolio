import React from "react";

const EXPERIENCE = [
  {
    period: "2025/10 – Now",
    title: "Internship in Tool conception",
    org: "Top 10 Stratégie",
    desc: "Building tools that help the company in their specifique area, such as a CRM or a trend surveilling tool.",
  },
  {
    period: "2025/2026",
    title: "School and self-directed learning",
    org: "My Digital School",
    desc: "Deep dive into Nest Js, React Native, Laravel, Docker and more. Some student & personal projects made as a practical experiences.",
  },
  {
    period: "2024/2025",
    title: "First lines of code",
    org: "Wild Code School",
    desc: "Started my coding journey with JavaScript, React and Express. Immediately hooked by the creative side of building for the web and the liberty of building my own back end.",
  },
  {
    period: "2021/2023",
    title: "Administrative Secretary",
    org: "Diagnosteam France",
    desc: "Worked as a swiss army knife for a familly oriented company which provided CEE control. Had the opportunity to help while installing an invoice tool as well as a reporting tool.",
  },
  {
    period: "2014/2020",
    title: "Sales and Back office",
    org: "ESF ski school in 3 different resorts",
    desc: "While selling ski lessons, I had the opportunity to help the web master with the school's site or even the maintenance of their internal communication tool. I brought my interest onto the subject of tool's building and the intricacies of e-commerce.",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
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
          03 — Experience
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
          My journey
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {EXPERIENCE.map((item, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1px 1fr",
              gap: "0 2rem",
              paddingBottom: i < EXPERIENCE.length - 1 ? "2.75rem" : 0,
            }}
          >
            {/* Year */}
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--muted)",
                paddingTop: "3px",
                textAlign: "right",
              }}
            >
              {item.period}
            </div>

            {/* Line + dot */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                  marginTop: "4px",
                }}
              />
              {i < EXPERIENCE.length - 1 && (
                <div
                  style={{
                    flex: 1,
                    width: "1px",
                    background: "rgba(26,23,20,0.1)",
                    marginTop: "6px",
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  marginBottom: "0.2rem",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: "0.83rem",
                  color: "var(--accent)",
                  marginBottom: "0.45rem",
                }}
              >
                {item.org}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
