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
import ImageSelector from "./ImageSelector";

interface ProjectsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Projects({ open, onOpenChange }: ProjectsProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-4xl w-[90vw] flex flex-col"
      >
        <DialogHeader>
          <DialogTitle>My projects</DialogTitle>
          <DialogDescription>
            Through my education and as personal interest I made those projects
            that I hope you will enjoy too
          </DialogDescription>
        </DialogHeader>
        <section className="-mx-4 no-scrollbar h-[75vh] overflow-x-auto px-4 py-4 flex flex-row gap-4 items-start w-full shrink-0">
          {PROJECTS.map((project) => (
            <Card
              className="w-70 shrink-0 mt-3 pt-0 flex flex-col items-center h-full overflow-y-auto no-scrollbar justify-between"
              key={project.title}
            >
              <section className="flex flex-col w-full gap-4 items-center">
                <ImageSelector images={project.images} />
                <CardHeader className="w-full">
                  <CardAction>
                    <Badge variant="secondary">{project.feat}</Badge>
                  </CardAction>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <article className="px-4">
                  <p>{project.description}</p>
                  <div className="flex flex-row flex-wrap gap-2 mt-6">
                    {project.stack.map((stack, index) => (
                      <Badge className="bg-chart-2" key={index}>
                        {stack}
                      </Badge>
                    ))}
                  </div>
                </article>
              </section>
              <CardFooter className="flex flex-row gap-4 justify-between border-0 bg-transparent w-full">
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
