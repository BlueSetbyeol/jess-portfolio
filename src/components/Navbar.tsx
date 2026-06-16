import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-100 bg-secondary border-b-border flex items-center justify-between h-[4em] backdrop-blur-md py-0 px-[clamp(1.25rem,5vw,3.5rem)]">
      <a
        href="#hero"
        className="text-[1.05rem] text-font-serif font-bold decoration-0 tracking-tight"
      >
        Jessica<span className="text-primary">.</span>
      </a>

      <ul
        className="md:flex list-none hidden"
        style={{
          gap: "clamp(1.25rem, 3vw, 2.25rem)",
        }}
      >
        {navLinks.map(({ label, href }) => (
          <li key={href} className="md:block hidden">
            <a
              href={href}
              className="text-[0.78rem] uppercase decoration-0 tracking-wide"
              style={{
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--primary)")
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden mr-2">
          <Button variant="secondary">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-120">
          {navLinks.map(({ label, href }) => (
            <DropdownMenuItem key={href}>
              <a
                href={href}
                className="text-[0.78rem] uppercase decoration-0 tracking-wide"
                style={{
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
