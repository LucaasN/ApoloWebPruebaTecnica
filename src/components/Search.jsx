import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { searchPokemon } from "../services/service.js";
import { showToast } from "../utils/util.js";

export const Search = ({ setPokemons, resetPokemons }) => {
  const [searchedPokemon, setSearchedPokemon] = useState("");

  const handleOnChange = (e) => {
    setSearchedPokemon(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchedPokemon) {
      const data = await searchPokemon(searchedPokemon);
      setPokemons([data]);
      return;
    }

    showToast("error", "Enter a valid name or ID");
  };

  const handleReset = () => {
    resetPokemons();
    setSearchedPokemon("");
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex justify-content-end mb-3">
      <Form.Group className="me-2">
        <Form.Control
          type="text"
          placeholder="Name or Id"
          className="form-control-lg"
          name="searchedPokemon"
          onChange={handleOnChange}
          value={searchedPokemon}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="me-2">
        Search
      </Button>
      <Button variant="outline-danger" type="button" onClick={handleReset}>
        Refresh
      </Button>
    </Form>
  );
};
