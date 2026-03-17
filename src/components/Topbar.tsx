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
        <Link href="/docs">Wiki</Link>
        <Link href="#">Discord</Link>
      </div>
    </div>
  );
}
