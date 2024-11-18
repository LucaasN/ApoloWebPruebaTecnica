import { useContext } from "react";
import { FormMaster, ListMaster } from "../components";
import { Context } from "../context/Context.jsx";
import { Container, Row } from "react-bootstrap";

export const EditCreate = () => {
  const { masters, addMaster, deleteMaster } = useContext(Context);

  return (
    <Container className="mt-5">
      <Row>
        <FormMaster masters={masters} addMaster={addMaster} />
        <ListMaster masters={masters} deleteMaster={deleteMaster} />
      </Row>
    </Container>
  );
};
