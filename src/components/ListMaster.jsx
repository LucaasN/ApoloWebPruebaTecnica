import { Table, Col, Button } from "react-bootstrap";
import { capitalizeFirstLetter } from "../utils/util.js";
import { Link } from "react-router-dom";

export const ListMaster = ({ masters, deleteMaster }) => {
  return (
    <Col md={6}>
      <Table
        responsive
        striped
        bordered
        hover
        variant="dark"
        className="mt-4 mt-lg-0"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Starter Pokemon</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {masters?.map((master) => (
            <tr key={master?.id}>
              <td>
                {master?.image && (
                  <img
                    src={master?.image}
                    alt={master?.name}
                    className="img-master me-1"
                  />
                )}
                {capitalizeFirstLetter(master?.name)}
              </td>
              <td>{master?.email}</td>
              <td>{capitalizeFirstLetter(master?.starterPokemon)}</td>
              <td className="d-flex justify-content-center align-items-center">
                <Link
                  to={`/editmaster/${master?.id}`}
                  className="text-decoration-none"
                >
                  Edit
                </Link>
                <Button
                  className="text-danger bg-transparent border-0"
                  type="button"
                  onClick={() => deleteMaster(master.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
};
