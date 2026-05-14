import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Home from "./Componentes/Home/Home";
import Sobre from "./Componentes/Sobre/Sobre";
import Portfolio from "./Componentes/Portfolio/Portfolio";
import Contato from "./Componentes/Contato/Contato";
import NotFound from "./NotFound";
import ScrollToTop from "./Componentes/ScrollToTop";
import ImgScrollTop from "./Componentes/ImgScrollTop";
import useMedia from "./Hooks/useMedia";

function App() {
  const media = useMedia("(min-width: 1200px)");

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="xl:pt-30 min-h-screen bg-neutral-1 overflow-x-hidden">
          <main>
            {media && <ImgScrollTop />}
            <ScrollToTop />
            <Routes>
              {/* <Route path="/" element={<PaginaConvidativa />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
