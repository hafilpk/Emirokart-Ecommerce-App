import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="mb-3">Welcome to Emirokart</h1>
      <p className="text-muted">Your one-stop shop for everything!</p>
      <Button variant="primary">Shop Now</Button>
    </div>
  );
}
