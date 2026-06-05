import React from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(247,244,239,0.88)",
        borderBottom: "1px solid rgba(26,23,20,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(1.25rem, 5vw, 3.5rem)",
        height: "58px",
        backdropFilter: "blur(12px)",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "1.05rem",
          color: "var(--fg)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        Jessica<span style={{ color: "var(--accent)" }}>.</span>
      </a>

      <ul
        style={{
          display: "flex",
          gap: "clamp(1.25rem, 3vw, 2.25rem)",
          listStyle: "none",
        }}
      >
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              style={{
                textDecoration: "none",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
