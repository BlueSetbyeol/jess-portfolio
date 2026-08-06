import { CONTACT } from "../utils/informations";
import { Button } from "./ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "./ui/item";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import GitHub from "../assets/github-logo.svg";
import LinkedIn from "../assets/linkedin-logo.svg";
import Mail from "../assets/envelope-simple.svg";

interface ContactProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Contact({ open, onOpenChange }: ContactProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        showCloseButton={false}
        side="right"
        className="data-[side=left]:w-5/6 data-[side=left]:md:w-3/4"
      >
        <SheetHeader>
          <SheetTitle>Let's say `Hello`</SheetTitle>
          <SheetDescription></SheetDescription>
          <section className="w-full h-screen py-6 overflow-y-auto no-scrollbar">
            <h2 className="text-chart-2">I'll be happy to hear from you !</h2>
            <p>Feel free to contact me from any of these socials :</p>
            <article className="flex flex-col gap-3 items-start my-6">
              {CONTACT.links.map((link) => (
                <Item key={link.label} variant="outline" className="px-2 py-2">
                  <ItemMedia variant="icon">
                    {link.label === "Mail" ? (
                      <img src={Mail} alt="Mail" />
                    ) : link.label === "GitHub" ? (
                      <img src={GitHub} alt="GitHub" />
                    ) : (
                      <img src={LinkedIn} alt="LinkedIn" />
                    )}
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{link.label}</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <a
                      href={link.href}
                      style={{
                        textDecoration: "none",
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
                      <Button>Go</Button>
                    </a>
                  </ItemActions>
                </Item>
              ))}
            </article>
          </section>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
