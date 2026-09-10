import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface ImageSelectorProps {
  images: string[];
}

export default function ImageSelector({ images }: ImageSelectorProps) {
  return (
    <Carousel className="w-full relative z-20 flex flex-row justify-center">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="p-1">
              <Card className="pb-0 pt-0 w-full">
                <CardContent className="flex aspect-square items-center justify-center px-2 py-3 w-full">
                  <img
                    src={image}
                    alt={image}
                    className="h-full object-contain max-h-65"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 bg-black/40 border-none text-white hover:bg-black/60" />
      <CarouselNext className="right-2 top-1/2 -translate-y-1/2 bg-black/40 border-none text-white hover:bg-black/60" />
    </Carousel>
  );
}
