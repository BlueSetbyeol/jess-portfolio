import { CONTACT } from "../utils/informations";
import type { LinkVariant } from "../utils/types";

const linkStyles: Record<LinkVariant, React.CSSProperties> = {
  email: { background: "var(--accent)", color: "#fff" },
  green: { background: "var(--green-light)", color: "var(--green)" },
  neutral: { background: "rgba(26,23,20,0.07)", color: "var(--fg)" },
};

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
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
          05 — Contact
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
          Say hello
        </h2>
      </div>

      <div
        style={{
          borderRadius: "20px",
          padding: "clamp(2.5rem, 5vw, 4rem)",
          background: "var(--accent-light)",
          border: "1.5px solid rgba(91,79,232,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            color: "var(--muted)",
            lineHeight: 1.2,
            marginBottom: "0.25rem",
          }}
        >
          {CONTACT.preTitle}
        </p>

        <p
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--accent)",
            lineHeight: 1,
            marginBottom: "1.25rem",
          }}
        >
          {CONTACT.title}
        </p>

        <p
          style={{
            color: "var(--muted)",
            fontWeight: 300,
            maxWidth: "420px",
            marginBottom: "2.25rem",
            fontSize: "0.95rem",
            lineHeight: 1.8,
          }}
        >
          {CONTACT.sub}
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {CONTACT.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "0.83rem",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                padding: "0.65rem 1.3rem",
                borderRadius: "100px",
                letterSpacing: "0.02em",
                transition: "transform 0.15s, opacity 0.15s",
                ...linkStyles[link.variant as LinkVariant],
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
