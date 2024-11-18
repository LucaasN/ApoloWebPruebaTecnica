import { useEffect, useState } from "react";
import { Container, Row, Pagination } from "react-bootstrap";
import { fetchPokemons } from "../services/service.js";
import { CardPokemon, Search } from "../components";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20; //Muestro 20 pokemons por pagina.

  const fetchData = async (page = 1) => {
    const offset = (page - 1) * limit;
    const data = await fetchPokemons(limit, offset);
    if (data) {
      setPokemons(data.results);
      setTotal(160); //Harcodeo la cantidad a 160 pokemons para no llamar a todos innecesariamente.
    }
  };

  const resetPokemons = () => {
    setPokemons([]);
    fetchData(1);
  };

  const goPage = (page) => {
    setCurrentPage(page);
    fetchData(page);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, []);

  return (
    <Container>
      <Search setPokemons={setPokemons} resetPokemons={() => resetPokemons()} />
      <Row>
        {pokemons?.map((pokemon, index) => (
          <CardPokemon
            params={pokemon?.name}
            key={index}
            setPokemons={setPokemons}
            resetPokemons={resetPokemons}
          />
        ))}
      </Row>
      <Pagination>
        {Array.from({ length: Math.ceil(total / limit) }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => goPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};
