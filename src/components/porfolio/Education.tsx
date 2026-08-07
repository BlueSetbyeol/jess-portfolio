import { SCHOOL } from "../../utils/informations";
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

interface EducationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Education({ open, onOpenChange }: EducationProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        showCloseButton={false}
        side="right"
        className="data-[side=right]:w-5/6 gap-2"
      >
        <SheetHeader>
          <SheetTitle>Education</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <section className="w-full h-screen mb-6 p-3 overflow-y-auto no-scrollbar">
          <h2 className="text-chart-2">
            Years of learning more than a few knowledge
          </h2>
          <h3 className="text-secondary-foreground my-3 text-xl">
            French education :
          </h3>
          <Accordion type="single" collapsible className="max-w-lg">
            {SCHOOL.french.map((school) => (
              <AccordionItem key={school.title} value={school.title}>
                <AccordionTrigger>{school.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-row justify-between w-full">
                    <p className="text-chart-2">{school.school}</p>
                    <p className="">{school.period}</p>
                  </div>
                  <p className="text-secondary-foreground">{school.desc}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <h3 className="text-secondary-foreground my-3 text-xl">
            Korean education :
          </h3>
          <Accordion type="single" collapsible className="max-w-lg">
            {SCHOOL.korean.map((school) => (
              <AccordionItem key={school.title} value={school.title}>
                <AccordionTrigger>{school.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-row justify-between w-full">
                    <p className="text-chart-2">{school.school}</p>
                    <p className="">{school.period}</p>
                  </div>
                  <p className="text-secondary-foreground">{school.desc}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </SheetContent>
    </Sheet>
  );
}
