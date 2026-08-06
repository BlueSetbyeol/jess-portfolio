import {
  BicepsFlexed,
  GraduationCap,
  Layers,
  Send,
  SquareUser,
} from "lucide-react";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useState } from "react";
import Who from "./Who";
import Contact from "./Contact";

export default function DesktopPresentation() {
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <section className="hidden md:flex gap-4">
      <HoverCard key={"left"} openDelay={10} closeDelay={10}>
        <HoverCardTrigger>
          <Button
            variant={"outline"}
            className="size-12 border-primary hover:bg-chart-4"
            onClick={() => setOpen(true)}
          >
            <SquareUser className="size-8 font-light" />
          </Button>
          <Who open={open} onOpenChange={setOpen} />
        </HoverCardTrigger>
        <HoverCardContent side={"left"}>
          <div className="flex flex-col gap-1">
            <h2 className="font-medium text-primary">Who am I</h2>
            <p>
              Here you might learn a bit more about someone I think you should
              know : Me ~
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      <Button
        variant={"outline"}
        className="size-12 border-primary hover:bg-chart-4"
      >
        <BicepsFlexed className="size-8 font-light" />
      </Button>
      <Button
        variant={"outline"}
        className="size-12 border-primary hover:bg-chart-4"
      >
        <Layers className="size-8 font-light" />
      </Button>
      <Button
        variant={"outline"}
        className="size-12 border-primary hover:bg-chart-4"
      >
        <GraduationCap className="size-8 font-light" />
      </Button>
      <Button
        variant={"outline"}
        className="size-12 border-primary hover:bg-chart-4"
        onClick={() => setOpenContact(true)}
      >
        <Send className="size-8 font-light" />
      </Button>
      <Contact open={openContact} onOpenChange={setOpenContact} />
    </section>
  );
}
