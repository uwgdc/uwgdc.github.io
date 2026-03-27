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
    banner:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3631930/3e91aeadeec378bdd956fe0ec618d5660f3fbad5/header.jpg?t=1770680947",
    link: "https://store.steampowered.com/app/3631930/Grey_Wake/",
  },
  {
    name: "Gay Woke",
    creator: "Second Fiddle Studio",
    banner:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3631930/dc3ef44922f136f61f8552ef36c928685ed513ba/ss_dc3ef44922f136f61f8552ef36c928685ed513ba.1920x1080.jpg?t=1770680947",
    link: "https://store.steampowered.com/app/3631930/Grey_Wake/",
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
