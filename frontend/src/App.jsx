import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Container, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <Router>
       <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
        </Container>
       </Navbar> 
    </Router>
    
  )
}

export default App
