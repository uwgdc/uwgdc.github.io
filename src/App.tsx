import IntroSection from "./components/sections/IntroSection";
import Topbar from "./components/Topbar";

import GridPattern from "./assets/GridPattern.svg";
import GameJamsSection from "./components/sections/GameJamsSection";
import GamesSection from "./components/sections/GamesSection";
import EventsSection from "./components/sections/EventsSection";
import ResourcesSectiion from "./components/sections/ResourcesSection";
import SponsorsSectiion from "./components/sections/SponsorsSection";
import Footer from "./components/Footer";

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
        <GameJamsSection />
        <GamesSection />
        <EventsSection />
        <ResourcesSectiion />
        <SponsorsSectiion />
        <Footer />
      </div>
    </div>
  );
}
