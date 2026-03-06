import Logo from "./Logo";

export default function Topbar({ ...props }) {
  return (
    <div
      className="flex items-center px-4 justify-between h-12 bg-neutral-50 border-b border-zinc-300 overflow-hidden"
      {...props}
    >
      <Logo />
      <div className="inline-flex justify-center items-center gap-2">
        <a href="/docs" className="justify-start text-base">
          Wiki
        </a>
        <a href="#" className="justify-start text-base">
          Discord
        </a>
      </div>
    </div>
  );
}
