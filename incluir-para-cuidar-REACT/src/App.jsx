import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./Componentes/Home";
import Header from "./Componentes/Header";
import BancoDeImagens from "./Componentes/BancoDeImagens/BancoDeImagens";
import { UserStorage } from "./UserContext";
import RotinaMao from "./Componentes/Rotinas/RotinaMao";
import RotinaCranio from "./Componentes/Rotinas/RotinaCranio";
import RotinaAbdome from "./Componentes/Rotinas/RotinaAbdome";
import RotinaTorax from "./Componentes/Rotinas/RotinaTorax";
import Sugestoes from "./Componentes/Sugestoes/Sugestoes";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/banco-de-imagens" element={<BancoDeImagens />} />
              <Route path="/rotina-mao" element={<RotinaMao />} />
              <Route path="/rotina-cranio" element={<RotinaCranio />} />
              <Route path="/rotina-abdome" element={<RotinaAbdome />} />
              <Route path="/rotina-torax" element={<RotinaTorax />} />
              <Route path="/sugestoes" element={<Sugestoes />} />
            </Routes>
          </main>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
