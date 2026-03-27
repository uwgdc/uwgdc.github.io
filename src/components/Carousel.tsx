import { ChevronLeft, ChevronRight } from "pixelarticons/react";
import { Button } from "./Button";
import { useState } from "react";
import { games, gameFromIndex } from "../data/games";

export default function Carousel() {
  const [gameIndex, setGameIndex] = useState(0);

  const game = games[gameIndex];
  const [nextGame] = gameFromIndex(gameIndex, 1);
  const [lastGame] = gameFromIndex(gameIndex, -1);

  return (
    <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center overflow-visible">
      <div
        className="hidden md:block absolute w-2/3 left-0 aspect-video brightness-50 bg-black border-4 outline-neutral-100 shadow-lg bg-cover transition-all"
        style={{
          backgroundImage: `url(${lastGame.banner})`,
        }}
      />
      <div
        className="hidden md:block absolute w-2/3 right-0 aspect-video brightness-50 bg-black border-4 outline-neutral-100 shadow-lg bg-cover transition-all"
        style={{ backgroundImage: `url(${nextGame.banner})` }}
      />
      <div
        className="relative z-10 w-full md:w-4/5 aspect-video bg-black bg-cover outline-4 -outline-offset-4 outline-neutral-100 shadow-xl transition-all"
        style={{ backgroundImage: `url(${game.banner})` }}
      >
        <a href={game.link} target="_blank" rel="noopener noreferrer">
          <div className="absolute bottom-4 left-4 pl-4 pr-8 py-2 bg-neutral-100 shadow-md flex flex-col">
            <span className="text-neutral-900 text-lg font-semibold">
              {game.name}
            </span>
            <span className="text-neutral-700 font-medium text-sm">
              {game.creator}
            </span>
          </div>
        </a>
        <Button
          onClick={() => {
            const [, index] = gameFromIndex(gameIndex, -1);
            setGameIndex(index);
          }}
          size="icon"
          className="absolute left-0 md:-translate-x-1/2 top-1/2 -translate-y-1/2 shadow-sm"
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={() => {
            const [, index] = gameFromIndex(gameIndex, 1);
            setGameIndex(index);
          }}
          size="icon"
          className="absolute right-0 md:translate-x-1/2 top-1/2 -translate-y-1/2 shadow-sm"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
