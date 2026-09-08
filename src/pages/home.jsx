import styles from "./home.module.css";

function Home() {
  const mesas = [
    { numero: "01", status: "livre" },
    { numero: "02", status: "reservada" },
    { numero: "03", status: "livre" },
    { numero: "04", status: "ocupada" },
    { numero: "05", status: "livre" },
    { numero: "06", status: "livre" },
    { numero: "07", status: "reservada" },
    { numero: "08", status: "livre" },
    { numero: "09", status: "livre" },
    { numero: "10", status: "livre" },
    { numero: "11", status: "ocupada" },
    { numero: "12", status: "livre" },
  ];

  return (
    <main className={styles.home}>
      <h2>Mesas</h2>

      <p>Clique em uma mesa para ver ou fazer uma reserva.</p>

      <div className={styles.legenda}>
        <span>🟢 Livre</span>
        <span>🟡 Reservada</span>
        <span>🔴 Ocupada</span>
      </div>

      <div className={styles.mesas}>
        {mesas.map((mesa) => (
          <button
            key={mesa.numero}
            className={`${styles.mesa} ${styles[mesa.status]}`}
          >
            <strong>{mesa.numero}</strong>
            <span>{mesa.status}</span>
          </button>
        ))}
      </div>
    </main>
  );
}

export default Home;
