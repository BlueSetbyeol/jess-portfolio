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
import Who from "./porfolio/Who";
import Contact from "./porfolio/Contact";
import Education from "./porfolio/Education";
import Experiences from "./porfolio/Experiences";
import Projects from "./porfolio/Projects";

export default function DesktopPresentation() {
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openExperiences, setOpenExperiences] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

  return (
    <section className="hidden md:flex gap-4">
      <HoverCard key={"who"} openDelay={10} closeDelay={10}>
        <HoverCardTrigger>
          <Button
            variant={"outline"}
            className="size-12 border-primary hover:bg-chart-4"
            onClick={() => setOpen(true)}
          >
            <SquareUser className="size-8 font-light" />
          </Button>
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
      <Who open={open} onOpenChange={setOpen} />
      <HoverCard key={"experiences"} openDelay={10} closeDelay={10}>
        <HoverCardTrigger>
          <Button
            variant={"outline"}
            className="size-12 border-primary hover:bg-chart-4"
            onClick={() => setOpenExperiences(true)}
          >
            <BicepsFlexed className="size-8 font-light" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent side={"bottom"}>
          <div className="flex flex-col gap-1">
            <h2 className="font-medium text-primary">Experiences</h2>
            <p>
              For a few years now I worked hard at learning and developing but I
              did more beforehand that enriched my expertise in various field
            </p>
          </div>
        </HoverCardContent>
        <Experiences open={openExperiences} onOpenChange={setOpenExperiences} />
      </HoverCard>
      <HoverCard key={"projects"} openDelay={10} closeDelay={10}>
        <HoverCardTrigger>
          <Button
            variant={"outline"}
            className="size-12 border-primary hover:bg-chart-4"
            onClick={() => setOpenProjects(true)}
          >
            <Layers className="size-8 font-light" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent side={"bottom"}>
          <div className="flex flex-col gap-1">
            <h2 className="font-medium text-primary">Projects</h2>
            <p>
              A few projects I am proud of showing you, whether they are made
              for school, associations or just myself
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      <Projects open={openProjects} onOpenChange={setOpenProjects} />
      <HoverCard key={"education"} openDelay={10} closeDelay={10}>
        <HoverCardTrigger>
          <Button
            variant={"outline"}
            className="size-12 border-primary hover:bg-chart-4"
            onClick={() => setOpenEducation(true)}
          >
            <GraduationCap className="size-8 font-light" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent side={"bottom"}>
          <div className="flex flex-col gap-1">
            <h2 className="font-medium text-primary">Education</h2>
            <p>
              I like learning and understanding various concepts or fields and
              it shows !
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      <Education open={openEducation} onOpenChange={setOpenEducation} />
      <HoverCard key={"contact"} openDelay={10} closeDelay={10}>
        <HoverCardTrigger>
          <Button
            variant={"outline"}
            className="size-12 border-primary hover:bg-chart-4"
            onClick={() => setOpenContact(true)}
          >
            <Send className="size-8 font-light" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent side={"right"}>
          <div className="flex flex-col gap-1">
            <h2 className="font-medium text-primary">Contact me</h2>
            <p>I would loke to hear from you, here is how to contact me</p>
          </div>
        </HoverCardContent>
      </HoverCard>
      <Contact open={openContact} onOpenChange={setOpenContact} />
    </section>
  );
}
