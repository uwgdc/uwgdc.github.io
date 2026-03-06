import { Button } from "./components/Button";

export default function Main() {
  return (
    <div className="flex flex-col">
      some testing text here
      <div className="flex flex-col gap-2">
        <Button>Join Us</Button>
        <Button variant="primary">Join Us</Button>
        <Button variant="outlined">Join Us</Button>
      </div>
    </div>
  );
}
