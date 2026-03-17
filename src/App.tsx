import IntroSection from "./components/sections/IntroSection";
import Topbar from "./components/Topbar";

import GridPattern from "./assets/GridPattern.svg";

export default function Main() {
  return (
    <div className="flex flex-col">
      <Topbar />
      <div
        className="flex flex-col bg-neutral-50 bg-repeat bg-center"
        style={{
          backgroundImage: `url("${GridPattern}")`,
          backgroundSize: "70px",
        }}
      >
        <IntroSection />
      </div>
    </div>
  );
}
