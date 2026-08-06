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
import Contact from "./Contact";

export default function SmallPresentation() {
  const [openWho, setOpenWho] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <section className="flex gap-4 md:hidden">
      <Button
        variant={"outline"}
        className="size-12 border-primary hover:bg-chart-4"
        onClick={() => setOpenWho(true)}
      >
        <SquareUser className="size-8 font-light" />
      </Button>
      <Who open={openWho} onOpenChange={setOpenWho} />
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
