import { useContext, useState } from "react";
import { showToast } from "../utils/util.js";
import { Context } from "../context/Context.jsx";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

export const Login = () => {
  const { login } = useContext(Context);
  const [username, setUsername] = useState("admin@gmail.com");
  const [password, setPassword] = useState("test1234");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      showToast("error", "Username and password are required.");
      return;
    }

    if (username === "admin@gmail.com" && password === "test1234") {
      login();
    } else {
      showToast("error", "Incorrect username and/or password.");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h2 className="text-center">Login</h2>
              <Form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="user@gmail.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    required
                  />
                </div>
                <Button variant="primary" type="submit" className="w-100">
                  Iniciar sesion
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
