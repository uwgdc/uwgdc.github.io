import { Button } from "../Button";
import Carousel from "../Carousel";
import { Sparkles } from "pixelarticons/react";

export default function GamesSection() {
  return (
    <div className="py-28 flex flex-col">
      <div className="flex flex-row flex-wrap gap-x-28 gap-y-16 justify-center items-center">
        <div className="flex flex-col items-center gap-8 w-full">
          <h1 className="mb-0 text-2xl [&]:font-medium gap-2.5">
            Games by our members
            <Sparkles
              width="32"
              height="32"
              className="inline align-top mx-2"
            />
          </h1>
          <Carousel />
          <span className="flex-inline gap-3 bg-white w-fit">
            <Button variant="secondary">See more</Button>
          </span>
        </div>
      </div>
    </div>
  );
}
