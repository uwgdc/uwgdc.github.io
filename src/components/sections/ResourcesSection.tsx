import { Button } from "../Button";
import Resources from "../../assets/Resources.png";
import { BookOpen } from "pixelarticons/react";

export default function ResourcesSectiion() {
  return (
    <div className="py-20 flex flex-col">
      <div className="flex flex-row flex-wrap gap-x-12 xl:gap-x-28 gap-y-16 justify-center items-center">
        <div className="flex flex-col gap-8 w-fit">
          <div className="flex flex-col gap-4 w-96">
            <h1 className="mb-0 text-2xl [&]:font-medium gap-2.5">
              Resources at every step
              <BookOpen
                width="32"
                height="32"
                className="inline align-top mx-2"
              />
            </h1>
            <p className="text-neutral-500 font-medium mt-0 w-full">
              We regularly publish game development resources, including guides,
              articles, presentations, and more.
            </p>
          </div>
          <span className="flex gap-3 bg-white w-fit">
            <Button variant="primary">Wiki</Button>
            <Button variant="outlined">Blog</Button>
          </span>
        </div>
        <img src={Resources} className="h-70"></img>
      </div>
    </div>
  );
}
