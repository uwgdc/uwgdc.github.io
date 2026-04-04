import { Button } from "../Button";
import Photos from "../../assets/Photos.png";
import { Calendar2 } from "pixelarticons/react";

export default function GameJamsSection() {
  return (
    <div className="py-20 flex flex-col bg-white">
      <div className="flex flex-row flex-wrap gap-x-12 xl:gap-x-28 gap-y-16 justify-center items-center">
        <div className="flex flex-col gap-8 w-fit">
          <div className="flex flex-col gap-4 w-96">
            <h1 className="mb-0 text-2xl [&]:font-medium gap-2.5">
              Termly game jams
              <Calendar2
                width="32"
                height="32"
                className="inline align-top mx-2"
              />
            </h1>
            <p className="text-neutral-600 mt-0 w-full">
              Our once-a-term game jams are one of the best ways to grow
              alongside others. <u>No experience required!</u>
            </p>
          </div>
          <span className="flex gap-3 bg-white w-fit">
            <Button variant="primary">Explore</Button>
            <Button variant="outlined">Notify me</Button>
          </span>
        </div>
        <img src={Photos} className="h-70"></img>
      </div>
    </div>
  );
}
