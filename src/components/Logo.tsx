import LogoSvg from "../assets/Logo.svg";

export default function Logo({ ...props }) {
  return <img src={LogoSvg} alt="UW Gamedev" width="122px" {...props} />;
}
