import { ABOUT } from "../../utils/informations";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./../ui/sheet";

interface WhoProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Who({ open, onOpenChange }: WhoProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        showCloseButton={false}
        side="left"
        className="data-[side=left]:w-5/6 gap-2"
      >
        <SheetHeader>
          <SheetTitle>Jessica Couble</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <section className="w-full h-screen mb-6 p-3 overflow-y-auto no-scrollbar">
          <h2 className="text-chart-2">About :</h2>
          <article className="flex flex-col gap-3 items-start">
            <h3 className="text-secondary-foreground my-3 text-xl">
              Full stack developer
            </h3>
            <>
              <p>
                After almost 10 years of experience working along customers in
                the service area, I fell in love with building things,
                especially on the web. What started as pure curiosity about
              </p>
              <p className="font-light text-chart-2 font-mono">
                how websites actually work
              </p>
              <p>
                became a genuine passion for crafting experiences that feel both
                intuitive and alive for customers.
              </p>
            </>
            <>
              <p className="font-light text-chart-2 font-mono">
                I embrace manual coding
              </p>
              <p>
                and undersantand that AI-assisted as well as vibe-coding
                workflows - Cursor, Claude, prompt engineering - are essential
                tools in our time. Which is why they are also present in my
                stack. I believe the best developers leverage everything
                available to think bigger and ship faster.
              </p>
            </>
            <p>
              Looking for a junior role where I can grow fast, contribute from
              day one, and work alongside a team that cares about quality and
              craft.
            </p>
            <p>- - - -</p>
            <p>
              As a side note, I so love to create that I also sew clothes and
              produce other miscelanous objects, when I'm not reading in my free
              time.
            </p>
          </article>
          <h2 className="pt-6 text-chart-2">Informations :</h2>
          <div>
            {ABOUT.map(({ label, value }) => (
              <div
                key={label}
                className="w-full flex flex-row gap-2 py-[0.9rem] border-b border-accent-foreground mb-6"
              >
                <p className="text-[0.72rem] uppercase text-muted-foreground w-[45%]">
                  {label}
                </p>
                <p className="text-[0.9rem] font-light text-chart-2 w-[55%] font-mono">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
}
