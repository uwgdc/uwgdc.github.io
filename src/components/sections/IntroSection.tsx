import { Button } from "../Button";
import Gizmo from "../../assets/Gizmo.svg?react";
import Controller from "../../assets/Controller.svg?react";

export default function IntroSection() {
  return (
    <div className="py-28 flex flex-col">
      <Gizmo className="-translate-y-10 absolute opacity-0 right-0 md:opacity-100 md:right-8 lg:right-32 xl:right-64 transition-all duration-300" />
      <Controller className="translate-y-24 absolute opacity-0 left-0 md:opacity-100 md:left-8 lg:left-32 xl:left-64 transition-all duration-300" />
      <div className="flex flex-col gap-8 items-center justify-center">
        <article className="flex flex-col gap-4">
          <h1 className="text-center mb-0 text-3xl md:text-4xl [&]:font-medium">
            Waterloo&apos;s Home
            <br /> for Game Development
          </h1>
          <p className="text-neutral-600 text-lg text-center mt-0">
            Open to <u className="decoration-2">everyone</u>.
          </p>
        </article>
        <span className="flex gap-3">
          <Button variant="primary">Join us</Button>
          <Button variant="outlined">Learn more</Button>
        </span>
      </div>
    </div>
  );
}
