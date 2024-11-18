import { Container, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <Container fluid className="py-5 bg-body-secondary">
      <ListGroup>
        <ListGroup.Item className="bg-transparent border-0">
          © Desarrollado por Lucas Nahuel Nuñez
        </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-0">
          <NavLink
            to="https://www.linkedin.com/in/lucas-n-nunez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item className="bg-transparent border-0">
          <NavLink
            to="https://github.com/LucaasN"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
