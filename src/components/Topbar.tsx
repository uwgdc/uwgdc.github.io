import Link from "./Link";
import Logo from "./Logo";

export default function Topbar({ ...props }) {
  return (
    <div
      className="flex items-center px-4 py-3 justify-between bg-white border-b-2 border-zinc-200 overflow-hidden"
      {...props}
    >
      <a href="/">
        <Logo />
      </a>
      <div className="inline-flex justify-center items-center gap-3">
        <Link href="/wiki/intro">Wiki</Link>
        <Link href="https://discord.gg/tHEXh9d">Discord</Link>
      </div>
    </div>
  );
}
