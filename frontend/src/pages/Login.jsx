import { Form, Button, Card } from "react-bootstrap";

export default function Login() {
  return (
    <Card className="p-4 mx-auto" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Login</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Card>
  );
}
