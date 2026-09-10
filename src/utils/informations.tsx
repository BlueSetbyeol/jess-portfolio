import type { Project } from "./types";
import cityHome from "../assets/city_canvas_home_desktop.png";
import cityAccount from "../assets/city_canvas_inscription_mobile.png";
import cityArt from "../assets/city_canvas_streetArtMap_tablette.png";
import featzyHome from "../assets/featzy_home_phone.png";
import featzyMap from "../assets/featzy_map_phone.png";
import featzyMenu from "../assets/featzy_menu_phone.png";
import featzyResa from "../assets/featzy_reservation_phone.png";
import pokemonsterHome from "../assets/pokemonster_home_phone.png";
import pokemonsterSell from "../assets/pokemonster_sell_tablette.png";
import wikidataEnv from "../assets/wikidata_env_phone.png";
import wikidataChart from "../assets/wikidata_env_tablette.png";
import simplyfactHome from "../assets/simplyfact_home_mobile.png";
import simplyfactResult from "../assets/simplyfact_result_phone.png";

export const HERO = {
  eyebrow: "Web Developer - available now",
  line1: "Building",
  line2: "the web with",
  italic: "curiosity.",
  sub: "I craft clean, expressive interfaces and embrace AI-assisted workflows to ship better products, faster. Looking for my first role in a team that builds boldly.",
  tags: [
    { label: "HTML" },
    { label: "CSS" },
    { label: "JavaScript" },
    { label: "React JS" },
    { label: "TypeScript" },
    { label: "Laravel" },
    { label: "Next" },
    { label: "Node" },
    { label: "React Native" },
    { label: "Frontend" },
    { label: "Backend" },
    { label: "Full Stack" },
    { label: "AI-assisted dev" },
  ],
  ctaPrimary: { label: "See my work", href: "#projects" },
  ctaSecondary: { label: "Let's talk", href: "#contact" },
};

export const ABOUT = [
  { label: "Location", value: "Lyon, France · work from home", accent: false },
  {
    label: "Status",
    value: "● Available from 2026, October 1st",
    accent: true,
  },
  { label: "Focus", value: "Full Stack · Front End", accent: false },
  {
    label: "Background",
    value: "Bootcamp · 2 years + Self-taught",
    accent: false,
  },
  { label: "Languages", value: "French · English · Korean", accent: false },
];

export const CONTACT = {
  links: [
    {
      label: "Mail",
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
  ],
};

export const SCHOOL = {
  korean: [
    {
      period: "2024 Spring semester",
      title: "1 semester Language school",
      school: "Aju University ·아주대학교 - Suwon, South Korea",
      desc: "Catching up on my Korean level - confirmed the B1 level.",
    },
    {
      period: "2016/2017",
      title: "1 year Language school",
      school: "Korea University · 고려대학교, Seoul, South Korea",
      desc: "Learning from basic sentence to complexe one. Confirmed the TOPIC 1 as well as the B2 level.",
    },
  ],
  french: [
    {
      period: "2025/2026",
      title:
        "Concepteur et Développeur d'Application · Application Designer and Developer",
      school: "My Digital School - Lyon",
      desc: "Along with an intership at Top10 Stratégie, I went deeper into the specifics of how to design and conceptualize an application that would suit the need of a client.",
    },
    {
      period: "2024/2025",
      title: "Développeur Web et Web Mobile · Web and Mobile Web Developer",
      school: "Wild Code School - Lyon",
      desc: "Deep dive into the coding world starting from scratch with JavaScript to the realisation of a group project made as a practical experience.",
    },
    {
      period: "2011/2012",
      title: "DU Infographiste 3D · 3D graphiste",
      school: "Gamagora & Université Lyon 2 - Lyon",
      desc: "In the world of video games graphiste are one of the 3 main aspect that people care about. Whether the game is in 2D or 3D, along with level designer and developer we developed our ideas so that gamers could play and enjoy with us.",
    },
    {
      period: "2009/2011",
      title: "BTS Design d'Espace · Interior & Space Design",
      school: "Lycée Charles Peguy - Orléans",
      desc: "Learning about space representation and construction was wonderful. Knowing how to analyse the client's need, offering different solutions and choosing the right answer is a process that is still true.",
    },
    {
      period: "2008/2009",
      title: "Mise A Niveau en Art Appliqué · Applied Arts Foundation Year",
      school: "Ecole de Condé - Lyon",
      desc: "Applied Art in it's most known form : Space Design, Fashion Design, Product Design and Visual Communication.",
    },
    {
      period: "2008",
      title: "BAC S spé. SPC · Scientist Baccalaureat",
      school: "Martinière Diderot - Lyon",
      desc: "Highschool diploma",
    },
  ],
};

export const EXPERIENCE = {
  dev: [
    {
      period: "2025/2026",
      title: "Internship in Tool conception",
      org: "Top 10 Stratégie",
      desc: "Building tools that help the company in their specifique area, such as a CRM or a trend surveilling tool.",
    },
    {
      period: "2025/2026",
      title: "Featzy - Reservations made easy",
      org: "My Digital School",
      desc: "Along with a group of 5, building from nothing - not even an idea - a successfull project that would be worth producing.",
    },
    {
      period: "2024/2025",
      title: "Wikidata",
      org: "Data for good",
      desc: "Project idea suggested to a public association where developper can offer their services and expertise to help small project see the light of day.",
    },
  ],
  general: [
    {
      period: "2021/2023",
      title: "Assistante Administrative - Direction",
      org: "Diagnosteam France",
      desc: "As an expert company, we had to organize control of building and houses' ecological structure. I was in charge of our inspector's planning and workload as well as sending invoices and client relationship.",
    },
    {
      period: "2021",
      title: "Assistante Administrative",
      org: "Dekra",
      desc: "Planning inspector's work schedule and receiving report to communicate to our clients.",
    },
    {
      period: "2018/2020",
      title: "Assistante Back Office",
      org: "ESF Courchevel 1850",
      desc: "Answering call from clients, their Personal Assistante or the resort hotel's consiergie to organize lessons during their stay. Communicating with instructors and scheduling lessons.",
    },
    {
      period: "2017/2018",
      title: "Hôtesse d'Accueil et de Vente",
      org: "ESF Peisey Vallandry",
      desc: "Welcoming clients, organizing lessons, billing and communicating with clients, companies as well as the ski instructors.",
    },
    {
      period: "2016/2017",
      title: "Barista",
      org: "Le Four Dorée - Seoul",
      desc: "Welcoming customers and receiving their order, waitressing as well as cleaning for the closing of the bakery and cofee shop.",
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    title: "Featzy",
    description:
      "A short description of what this app does and why it matters. Describe the problem it solves and what you learned.",
    stack: ["React js", "Tailwind", "ShadCN", "Google map", "Auth0"],
    liveUrl: "https://featzy.jessica-couble.com/",
    githubUrl: "https://github.com/BlueSetbyeol/featzy_front",
    feat: "school · group",
    images: [featzyHome, featzyMap, featzyMenu, featzyResa],
  },
  {
    title: "Simply Fact",
    description:
      "A short description of what this app does and why it matters. Describe the problem it solves and what you learned.",
    stack: ["Laravel", "React", "Material UI", "S3"],
    liveUrl: "https://simplyfact-production-m8wtgc.laravel.cloud/",
    githubUrl: "https://github.com/BlueSetbyeol/simplyfact",
    feat: "association · school",
    images: [simplyfactHome, simplyfactResult],
  },
  {
    title: "Pokemonster S.A.P.",
    description:
      "A project made as a fun little test to learn Next js. The aim would be to save pokemon and help them find a good home in a world of trading little monster for fun. A bit like a shelter.",
    stack: ["Next js", "Tailwind"],
    liveUrl: "https://pokemonster-eta.vercel.app/",
    githubUrl: "https://github.com/BlueSetbyeol/pokemonster_sap",
    feat: "personal",
    images: [pokemonsterHome, pokemonsterSell],
  },
  {
    title: "WikiData",
    description:
      "As a voluntary help, I took part in this project as a Front End developper and helped build it up to today's state. Working with a real and experienced Backend developper as well as a client kind of partener was a new and rich experience that I very much appreciated. The aim of the web app was to help French people answer to their questions regarding numbers and stats on certain element. We sadly had to stop without completing the idea as less and less volunteer were able to give time.",
    stack: ["React js", "CSS", "Material UI"],
    liveUrl: "https://wikidata.onrender.com/",
    githubUrl: "https://github.com/association-work/stats_visualiser",
    feat: "association · group",
    images: [wikidataChart, wikidataEnv],
  },
  {
    title: "City Canva",
    description:
      "A student project that aim to accompany you on your trail through the streets of the world. Identify the city you want to visit and discover the superbe sight of Street Art.",
    stack: ["React", "TypeScript", "Express js", "Leaflet map"],
    liveUrl: "https://new-city-canvas.jessica-couble.com/",
    githubUrl: "https://github.com/BlueSetbyeol/New_City_Canvas",
    feat: "school · group",
    images: [cityHome, cityArt, cityAccount],
  },
];
