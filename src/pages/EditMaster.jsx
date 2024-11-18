import { useContext } from "react";
import { FormMaster } from "../components";
import { Context } from "../context/Context";
import { Row } from "react-bootstrap";

export const EditMaster = () => {
  const { masters, addMaster, getMaster, updateMaster } = useContext(Context);

  return (
    <Row className="d-flex justify-content-center">
      <FormMaster
        masters={masters}
        addMaster={addMaster}
        getMaster={getMaster}
        updateMaster={updateMaster}
      />
    </Row>
  );
};
