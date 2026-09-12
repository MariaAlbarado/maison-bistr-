import Home from "./pages/Home/Home";
import Mesas from "./pages/Mesas/Mesas";
import Reservas from "./pages/Reservas/Reservas";

import { Routes, Route, Link } from "react-router-dom";
import iconeRestaurante from "./assets/maison_icon.png";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <img
            src={iconeRestaurante}
            alt="Ícone Maison Bistrô"
            className="icone-restaurante"
          />

          <h1>Maison Bistrô</h1>
          <p>Reservas</p>
        </div>

        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/mesas">Mesas</Link>
          <Link to="/reservas">Reservas</Link>
        </nav>

        <div className="frase">
          <p>Boa comida</p>
          <p>bons encontros.</p>
        </div>
      </aside>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </div>
  );
}

export default App;
