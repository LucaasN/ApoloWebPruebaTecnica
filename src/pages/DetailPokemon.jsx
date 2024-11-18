import { useState, useEffect } from "react";
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import { getAndSetPokemon } from "../services/service.js";
import { useParams, Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/util.js";

export const DetailPokemon = () => {
  const [pokemon, setPokemon] = useState("");
  const { id } = useParams();
  const srcImg =
    pokemon?.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon?.sprites?.front_default;
  const imgFront = pokemon?.sprites?.front_default;
  const imgBack = pokemon?.sprites?.back_default;

  useEffect(() => {
    getAndSetPokemon(id, setPokemon);
  }, []);

  return (
    <Container className="bg-body-tertiary container p-3 rounded">
      <Row>
        <Col xs={12} md={4} className="text-center">
          <img
            alt="pokemon-img"
            src={srcImg}
            height={500}
            className="border rounded w-100"
          />
        </Col>
        <Col xs={12} md={8}>
          <h3 className="text-left">
            #{pokemon?.id} - {capitalizeFirstLetter(pokemon?.name)}
          </h3>

          <h5 className="mt-4">Types</h5>
          <ListGroup>
            {pokemon?.types?.map((typeObj, index) => (
              <ListGroup.Item
                key={index}
                className="bg-transparent border-0 py-0"
              >
                {capitalizeFirstLetter(typeObj.type.name)}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <h5 className="mt-4">Abilities</h5>
          <ListGroup>
            {pokemon?.abilities?.map((abilityObj, index) => (
              <ListGroup.Item
                key={index}
                className="bg-transparent border-0 py-0"
              >
                {capitalizeFirstLetter(abilityObj.ability.name)}{" "}
                {abilityObj.is_hidden}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <strong>Front:</strong>
          <img src={imgFront} alt="img-front" width={100} height={100} />
          <br />
          <strong>Back:</strong>
          <img src={imgBack} alt="img-front" width={100} height={100} />
          <br />

          <Link className="btn btn-outline-primary" to="/">
            Back
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
