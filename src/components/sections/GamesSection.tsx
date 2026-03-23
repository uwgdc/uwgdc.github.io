import { Button } from "../Button";
import Carousel from "../Carousel";

export default function GamesSection() {
  return (
    <div className="py-28 flex flex-col">
      <div className="flex flex-row flex-wrap gap-x-28 gap-y-16 justify-center items-center">
        <div className="flex flex-col items-center gap-8 w-full">
          <h1 className="mb-0 text-2xl [&]:font-semibold text-center">
            Games by our members
          </h1>
          <Carousel />
          <span className="flex gap-3 bg-white w-fit">
            <Button variant="secondary">See more</Button>
          </span>
        </div>
      </div>
    </div>
  );
}
