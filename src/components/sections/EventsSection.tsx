import { Button } from "../Button";
import Tickets from "../../assets/Tickets.png";
import { CalendarWeeks } from "pixelarticons/react";

export default function EventsSection() {
  return (
    <div className="py-20 flex flex-col bg-white">
      <div className="flex flex-row flex-wrap gap-x-12 xl:gap-x-28 gap-y-16 px-4 justify-center items-center">
        <div className="flex flex-col gap-8 w-fit">
          <div className="flex flex-col gap-4 max-w-96">
            <h1 className="mb-0 text-2xl [&]:font-medium gap-2.5">
              Weekly events, open to all
              <CalendarWeeks
                width="32"
                height="32"
                className="inline align-top mx-2"
              />
            </h1>
            <p className="text-neutral-600 mt-0 w-full">
              We host casual get-togethers each week on Thursdays and Saturdays.
              Come say hi!
            </p>
          </div>
          <span className="flex gap-3 bg-white w-fit">
            <a href="/wiki/#events">
              <Button variant="primary">Details</Button>
            </a>
            <a href="https://discord.gg/tHEXh9d">
              <Button variant="outlined">Notify me</Button>
            </a>
          </span>
        </div>
        <img src={Tickets} className="h-70"></img>
      </div>
    </div>
  );
}
