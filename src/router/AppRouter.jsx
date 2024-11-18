import { Route, Routes } from "react-router-dom";
import { Home, EditCreate, Login, DetailPokemon, EditMaster } from "../pages";
import { Container } from "react-bootstrap";

export const AppRouter = () => {
  return (
    <Container fluid className="py-4">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/editcreate" element={<EditCreate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pokemondetail/:id" element={<DetailPokemon />} />
        <Route path="/editmaster/:id" element={<EditMaster />} />
      </Routes>
    </Container>
  );
};
