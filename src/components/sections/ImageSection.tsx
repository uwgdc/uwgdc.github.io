import { cn } from "../../lib/cn";
import { Button } from "../Button";
import { CalendarWeeks } from "pixelarticons/react";

function Section({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-20 flex flex-col bg-white", className)}>
      <div className="flex flex-row flex-wrap gap-x-12 xl:gap-x-28 gap-y-16 justify-center items-center">
        <Content>
          <div className={"flex flex-col gap-4 w-96"}>
            <Heading>
              Weekly events, open to all
              <CalendarWeeks
                width="32"
                height="32"
                className="inline align-top mx-2"
              />
            </Heading>
            <Body>
              We host casual get-togethers each week on Thursdays and Saturdays.
              Come say hi!
            </Body>
          </div>
          <Buttons>
            <Button variant="primary">Details</Button>
            <Button variant="outlined">Notify me</Button>
          </Buttons>
        </Content>
        <img src={Tickets} className="max-h-70"></img>
      </div>
    </section>
  );
}

function Content({ children, ...props }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 w-fit" {...props}>
      {children}
    </div>
  );
}

function Heading({ children, ...props }: { children?: React.ReactNode }) {
  return (
    <h2 className="mb-0 text-2xl [&]:font-medium gap-2.5" {...props}>
      {children}
    </h2>
  );
}

function Body({ children, ...props }: { children?: React.ReactNode }) {
  return (
    <p className="text-neutral-600 font-medium mt-0 w-full" {...props}>
      {children}
    </p>
  );
}

function Buttons({ children, ...props }: { children?: React.ReactNode }) {
  return (
    <span className="flex gap-3 bg-white w-fit" {...props}>
      {children}
    </span>
  );
}

export default { Section };
