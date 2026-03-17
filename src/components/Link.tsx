export default function Link({ children, href }) {
  return (
    <a
      href={href}
      className="hover:text-primary-500 transition-all duration-150"
    >
      {children}
    </a>
  );
}
