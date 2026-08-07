import { EXPERIENCE } from "../../utils/informations";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./../ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./../ui/accordion";

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
        className="data-[side=right]:w-5/6 gap-2"
      >
        <SheetHeader>
          <SheetTitle>Experiences</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <section className="w-full h-screen mb-6 p-3 overflow-y-auto no-scrollbar">
          <h2 className="text-chart-2">From Administrative to Developper</h2>
          <h3 className="text-secondary-foreground my-3 text-xl">
            My journey as Developper Web :
          </h3>
          <div className="flex flex-col mb-4">
            {EXPERIENCE.dev.map((item) => (
              <div className="grid grid-cols-[75px_10px_1fr] gap-2">
                <p className="text-muted-foreground pt-1 text-right">
                  {item.period}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="bg-chart-2 w-2.5 h-3 rounded-[50%] mt-1.5" />
                  <div className="w-px h-full bg-primary mt-1.5" />
                </div>

                <div>
                  <p className="mb-[0.2rem] font-mono text-[1.05rem] font-bold">
                    {item.title}
                  </p>
                  <p className="text-chart-2 mb-[0.45rem]">{item.org}</p>
                  <p className="text-secondary-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <h3 className="text-secondary-foreground my-3 text-xl">
            General experiences
          </h3>
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
          <p className="text-muted-foreground">More informations to come </p>
        </section>
      </SheetContent>
    </Sheet>
  );
}
