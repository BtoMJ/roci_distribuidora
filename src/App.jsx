import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Catalog from "./pages/Catalog.jsx";
import Home from "./components/Home/Home.jsx";
import Acrilico from "./components/Acrilico/Acrilico.jsx";
import CatEye from "./components/CatEye/CatEye.jsx";
import Linners from "./components/Linners/Linners.jsx";
import Lumistick from "./components/Lumistick/Lumistick.jsx";

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
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
