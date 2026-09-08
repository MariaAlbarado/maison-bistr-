import Home from "./pages/home";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <h1>Maison Bistrô</h1>
          <p>Reservas</p>
        </div>

        <nav className="menu">
          <button className="ativo">Mesas</button>
          <button>Reservas</button>
          <button>Clientes</button>
        </nav>

        <div className="frase">
          <p>Boa comida</p>
          <p>bons encontros.</p>
        </div>
      </aside>

      <Home />
    </div>
  );
}

export default App;
