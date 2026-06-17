import { EXPERIENCE } from "../utils/informations";

export default function Experience() {
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
          className="text-[clamp(2rem,5vw,3rem)]"
          style={{
            fontFamily: "'Syne', sans-serif",
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
}
