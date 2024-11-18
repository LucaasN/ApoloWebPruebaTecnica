import { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { getAndSetPokemon } from "../services/service.js";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/util.js";

export const CardPokemon = ({ params }) => {
  const [pokemon, setPokemon] = useState("");
  const srcImg =
    pokemon?.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon?.sprites?.front_default;

  useEffect(() => {
    getAndSetPokemon(params, setPokemon);
  }, [params]);

  if (pokemon) {
    return (
      <Col xs="12" md="3">
        <Link
          to={`/pokemondetail/${pokemon?.id}`}
          className="text-decoration-none link-pokemon"
        >
          <Card className="mb-4">
            <Card.Img variant="top" src={srcImg} />
            <Card.Body className="text-center border-top bg-body-tertiary">
              <Card.Title>
                #{pokemon?.id} -{capitalizeFirstLetter(pokemon?.name)}
              </Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  }
};
