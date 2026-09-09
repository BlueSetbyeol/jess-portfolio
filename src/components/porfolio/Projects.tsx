import { PROJECTS } from "../../utils/informations";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface ProjectsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Projects({ open, onOpenChange }: ProjectsProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-4xl w-[90vw] max-h-[85vh] flex flex-col"
      >
        <DialogHeader>
          <DialogTitle>My projects</DialogTitle>
          <DialogDescription>
            Through my education and as personal interest I made those projects
            that I hope you will enjoy too
          </DialogDescription>
        </DialogHeader>
        <p>Visual coming soon !</p>
        <section className="-mx-4 no-scrollbar max-h-[75vh] overflow-x-auto px-4 pb-4 flex flex-row gap-4 items-start w-full shrink-0">
          {PROJECTS.map((project) => (
            <Card className="relative w-80 shrink-0" key={project.title}>
              <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
              <img
                src="https://avatar.vercel.sh/shadcn1"
                alt="Project's cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
              />
              <CardHeader>
                <CardAction>
                  <Badge variant="secondary">{project.feat}</Badge>
                </CardAction>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <section className="px-4">
                <p>{project.description}</p>
                <div className="flex flex-row flex-wrap gap-2 my-2">
                  {project.stack.map((stack) => (
                    <Badge className="bg-chart-2">{stack}</Badge>
                  ))}
                </div>
              </section>
              <CardFooter className="flex flex-row gap-8 justify-center border-0 bg-transparent">
                <Button asChild variant={"secondary"} className="w-18">
                  <a href={project.githubUrl} target="_blank">
                    GitHub
                  </a>
                </Button>
                <Button asChild className="w-18">
                  <a href={project.liveUrl} target="_blank">
                    Live
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </DialogContent>
    </Dialog>
  );
}
