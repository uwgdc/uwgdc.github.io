import { ChevronLeft, ChevronRight } from "pixelarticons/react";
import { Button } from "./Button";

export default function Carousel() {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center overflow-visible">
      <div className="hidden md:block absolute w-2/3 left-0 aspect-video brightness-50 bg-black border-4 outline-neutral-100 shadow-lg" />
      <div className="hidden md:block absolute w-2/3 right-0 aspect-video brightness-50 bg-black border-4 outline-neutral-100 shadow-lg" />
      <div className="relative z-10 w-full md:w-4/5 aspect-video bg-black outline-4 -outline-offset-4 outline-neutral-100 shadow-xl">
        <div className="absolute bottom-4 left-4 pl-4 pr-8 py-2 bg-neutral-100 shadow-md flex flex-col">
          <span className="text-neutral-900 text-lg font-semibold">
            Gay Wake
          </span>
          <span className="text-neutral-700 font-medium">
            Second Fiddle Studio
          </span>
        </div>
        <Button size="icon" className="absolute top-5 left-5">
          <ChevronLeft />
        </Button>
        <Button size="icon" className="absolute">
          <ChevronRight />
        </Button>
        <Button size="icon">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
