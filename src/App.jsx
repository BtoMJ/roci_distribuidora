import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Catalog from "./pages/Catalog.jsx";
import Home from "./components/Home/Home.jsx";
import Acrilico from "./components/Acrilico/Acrilico.jsx";
import CatEye from "./components/CatEye/CatEye.jsx";
import Linners from "./components/Linners/Linners.jsx";
import Lumistick from "./components/Lumistick/Lumistick.jsx";
import Collections from "./components/Collections/Collections.jsx";
import Polygel from "./components/Polygel/Polygel.jsx";
import Remolino from "./components/Remolino/Remolino.jsx";
// import Electronic from "./components/Electronic/Electronic.jsx";
import Mirror from "./components/Mirror/Mirror.jsx";
import Brocas from "./components/Brocas/Brocas.jsx";
// import Pinceles from "./components/Pinceles/Pinceles.jsx";
import Limas from "./components/Limas/Limas.jsx";
import Varios from "./components/Varios/Varios.jsx";
import Esmaltes from "./components/Esmaltes/Esmaltes.jsx";
import Rubber from "./components/Rubber/Rubber.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/acrilico" element={<Acrilico />} />
          <Route path="/catalog/cat-eye" element={<CatEye />} />
          <Route path="/catalog/linners" element={<Linners />} />
          <Route path="/catalog/lumistick" element={<Lumistick />} />
          <Route path="/catalog/collections" element={<Collections />} />
          <Route path="/catalog/polygel" element={<Polygel />} />
          <Route path="/catalog/remolino" element={<Remolino />} />
          {/* <Route path="/catalog/electronic" element={<Electronic />} /> */}
          <Route path="/catalog/mirror" element={<Mirror />} />
          <Route path="/catalog/brocas" element={<Brocas />} />
          {/* <Route path="/catalog/pinceles" element={<Pinceles />} /> */}
          <Route path="/catalog/limas" element={<Limas />} />
          <Route path="/catalog/varios" element={<Varios />} />
          <Route path="/catalog/esmaltes" element={<Esmaltes />} />
          <Route path="/catalog/rubber" element={<Rubber />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
