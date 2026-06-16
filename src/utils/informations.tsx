import type { BannerVariant } from "./types";

export const EXPERIENCE = [
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

export const HERO = {
  eyebrow: "Junior developer — available now",
  line1: "Building",
  line2: "the web with",
  italic: "curiosity.",
  sub: "I craft clean, expressive interfaces and embrace AI-assisted workflows to ship better products, faster. Looking for my first role in a team that builds boldly.",
  tags: [
    { label: "React · TypeScript", variant: "accent" },
    { label: "Laravel", variant: "neutral" },
    { label: "Next", variant: "neutral" },
    { label: "Node", variant: "accent" },
    { label: "AI-assisted dev", variant: "green" },
    { label: "Frontend", variant: "neutral" },
    { label: "Backend", variant: "neutral" },
    { label: "Full Stack", variant: "neutral" },
  ],
  ctaPrimary: { label: "See my work", href: "#projects" },
  ctaSecondary: { label: "Let's talk", href: "#contact" },
};

export const ABOUT = {
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

export const CONTACT = {
  preTitle: "Let's build something",
  title: "great together.",
  sub: "I'm actively looking for my first junior dev role, after finishing my internship. If that sounds like you, I'd love to connect.",
  links: [
    {
      label: "jessica.couble@gmail.com",
      href: "mailto:jessica.couble@gmail.com",
      variant: "email",
    },
    {
      label: "GitHub",
      href: "https://github.com/BlueSetbyeol/",
      variant: "neutral",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jessica-couble-5668b545/",
      variant: "green",
    },
    { label: "Resume", href: "#", variant: "neutral" },
  ],
};

interface Project {
  title: string;
  description: string;
  stack: string[];
  banner: BannerVariant;
  liveUrl: string;
  githubUrl: string;
}

export const PROJECTS: Project[] = [
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
