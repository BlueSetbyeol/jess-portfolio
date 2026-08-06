import {
  BicepsFlexed,
  GraduationCap,
  Layers,
  Send,
  SquareUser,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Who from "./Who";

export default function SmallPresentation() {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex gap-4 md:hidden">
      <Button
        variant={"outline"}
        className="size-12 border-primary hover:bg-chart-4"
        onClick={() => setOpen(true)}
      >
        <SquareUser className="size-8 font-light" />
      </Button>
      <Who open={open} onOpenChange={setOpen} />
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
      >
        <Send className="size-8 font-light" />
      </Button>
    </section>
  );
}
