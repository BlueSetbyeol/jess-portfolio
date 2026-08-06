import { EXPERIENCE } from "../utils/informations";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface ExperiencesProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Experiences({ open, onOpenChange }: ExperiencesProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        showCloseButton={false}
        side="right"
        className="data-[side=right]:w-5/6"
      >
        <SheetHeader>
          <SheetTitle>Experiences</SheetTitle>
          <SheetDescription></SheetDescription>
          <section className="w-full h-screen py-4 overflow-y-auto no-scrollbar">
            <h2 className="text-chart-2">From Administrative to Developper</h2>
            <h3 className="text-secondary-foreground my-3">
              My journey as Developper Web :
            </h3>
            <div className="flex flex-col">
              {EXPERIENCE.dev.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1px 1fr",
                    gap: "0 2rem",
                    paddingBottom:
                      i < EXPERIENCE.dev.length - 1 ? "2.75rem" : 0,
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
                    {i < EXPERIENCE.dev.length - 1 && (
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
            <h3>General experiences</h3>
            <Accordion type="single" collapsible className="max-w-lg">
              {EXPERIENCE.general.map((exp) => (
                <AccordionItem key={exp.title} value={exp.title}>
                  <AccordionTrigger>{exp.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-row justify-between w-full">
                      <p className="text-chart-2">{exp.org}</p>
                      <p className="">{exp.period}</p>
                    </div>
                    <p className="text-secondary-foreground">{exp.desc}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
