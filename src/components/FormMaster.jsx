import { useState, useEffect } from "react";
import { showToast } from "../utils/util.js";
import { Col, Button, Card, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

export const FormMaster = ({ masters, addMaster, getMaster, updateMaster }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [master, setMaster] = useState({
    name: "",
    email: "",
    starterPokemon: "bulbasaur",
    image: null,
  });

  useEffect(() => {
    if (id) {
      const masterToEdit = getMaster(id);
      if (masterToEdit) {
        setMaster(masterToEdit);
        return;
      }
      showToast("error", "Master not found");
    }
  }, [id, getMaster]);

  const handleChange = (e) => {
    setMaster({
      ...master,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMaster({
          ...master,
          image: reader.result, // Base64
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (master.name && master.email && master.starterPokemon && master.image) {
      if (id) {
        updateMaster(id, master);
        navigate("/editcreate");
      } else {
        master.id = Date.now();
        addMaster(master);
      }

      showToast(
        "success",
        id ? "Master updated successfully!" : "Master added successfully!"
      );

      if (!id) {
        setMaster({
          name: "",
          email: "",
          starterPokemon: "bulbasaur",
          image: null,
        });
      }
    } else {
      showToast("error", "All the fields are required.");
    }
  };

  return (
    <Col md={6}>
      <Card>
        <Card.Body>
          <h2>{id ? "Edit Pokemon Master" : "Create Pokemon Master"}</h2>
          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={master?.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={master?.email}
                onChange={handleChange}
                placeholder="master@gmail.com"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              {master?.image && (
                <img
                  src={master?.image}
                  alt="Master Avatar"
                  className="img-master-edit"
                />
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Starter Pokemon</label>
              <select
                className="form-select"
                name="starterPokemon"
                onChange={handleChange}
                value={master?.starterPokemon}
              >
                <option value="bulbasaur">Bulbasaur</option>
                <option value="charmander">Charmander</option>
                <option value="squirtle">Squirtle</option>
                <option value="pikachu">Pikachu</option>
              </select>
            </div>

            <Button variant="primary" type="submit" className="w-100">
              {id ? "Update Master" : "Add Master"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
};
