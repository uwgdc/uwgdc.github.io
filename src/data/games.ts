export type Game = {
  name: string;
  creator: string;
  banner: string;
  link: string;
};

const GAMES: Game[] = [
  {
    name: "Grey Wake",
    creator: "Second Fiddle Studio",
    banner: "src/assets/games/GreyWake.webp",
    link: "https://store.steampowered.com/app/3631930/Grey_Wake/",
  },
  {
    name: "Khaos Keys",
    creator: "qwqsoft",
    banner: "src/assets/games/KhaosKeys.webp",
    link: "https://youtu.be/mieGHKDegrQ",
  },
  {
    name: "Seas of Static",
    creator: "Fishbed Studios",
    banner: "src/assets/games/SeasOfStatic.webp",
    link: "https://www.youtube.com/watch?v=LsFUsDV-cr4",
  },
];

export function gameFromIndex(
  index: number,
  increment: number,
): [Game, number] {
  let newIndex = 0;

  if (index + increment > GAMES.length - 1) {
    newIndex = 0;
  } else if (index + increment < 0) {
    newIndex = GAMES.length - 1;
  } else {
    newIndex = index + increment;
  }

  return [GAMES[newIndex], newIndex];
}

export const games = GAMES;
