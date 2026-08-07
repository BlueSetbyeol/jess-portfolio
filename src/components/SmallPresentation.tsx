import {
  BicepsFlexed,
  GraduationCap,
  Layers,
  Send,
  SquareUser,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Who from "./porfolio/Who";
import Contact from "./porfolio/Contact";
import Education from "./porfolio/Education";
import Experiences from "./porfolio/Experiences";
import Projects from "./porfolio/Projects";

export default function SmallPresentation() {
  const [openWho, setOpenWho] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openExperiences, setOpenExperiences] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

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
        onClick={() => setOpenExperiences(true)}
      >
        <BicepsFlexed className="size-8 font-light" />
      </Button>
      <Experiences open={openExperiences} onOpenChange={setOpenExperiences} />
      <Button
        variant={"outline"}
        className="size-12 border-primary hover:bg-chart-4"
        onClick={() => setOpenProjects(true)}
      >
        <Layers className="size-8 font-light" />
      </Button>
      <Projects open={openProjects} onOpenChange={setOpenProjects} />
      <Button
        variant={"outline"}
        className="size-12 border-primary hover:bg-chart-4"
        onClick={() => setOpenEducation(true)}
      >
        <GraduationCap className="size-8 font-light" />
      </Button>
      <Education open={openEducation} onOpenChange={setOpenEducation} />
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
