import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="bg-white px-4 py-16 flex flex-col border-t-2 border-zinc-200">
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-16 gap-y-10 lg:gap-64">
          <div className="flex flex-col">
            <div className="flex flex-col gap-1.5">
              <Logo />
              <p className="text-neutral-600">
                University of Waterloo Game Development Club
              </p>
            </div>
            <br />
            <p className="text-neutral-400">
              Website by{" "}
              <a
                className="underline decoration-2"
                href="https://avafe.me"
                target="_blank"
                rel="noreferrer"
              >
                Ava Lynch
              </a>
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-neutral-600 border-b-2">Site</span>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="/docs">Wiki</a>
                </li>
                <li>
                  <a href="/docs/blog">Talks</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-neutral-600 border-b-2">Socials</span>
              <ul>
                <li>
                  <a href="https://discord.gg/tHEXh9d">Discord</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/uwgamedev/">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
