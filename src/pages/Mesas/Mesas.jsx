import styles from "./Mesas.module.css";
import { useState } from "react";

function Mesas() {
  const [mesas, setMesas] = useState([
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
  ]);

  const [mesaSelecionada, setMesaSelecionada] = useState("");

  

  function mudarStatus(novoStatus) {
    setMesas(
      mesas.map((mesa) =>
        mesa.numero === mesaSelecionada
          ? { ...mesa, status: novoStatus }
          : mesa,
      ),
    );
  }

  return (
    <main className={styles.home}>
      <div className={styles.areaMesas}>
        <h2>Mesas</h2>

        <p>Clique em uma mesa para ver ou fazer uma reserva.</p>

        <p>
          Mesa selecionada: <strong>{mesaSelecionada || "nenhuma"}</strong>
        </p>

        <p className={styles.tituloStatus}>Alterar status da mesa</p>

        <div className={styles.acoesStatus}>
          <button
            className={styles.btnLivre}
            onClick={() => mudarStatus("livre")}
            disabled={!mesaSelecionada}
          >
            Livre
          </button>

          <button
            className={styles.btnReservada}
            onClick={() => mudarStatus("reservada")}
            disabled={!mesaSelecionada}
          >
            Reservada
          </button>

          <button
            className={styles.btnOcupada}
            onClick={() => mudarStatus("ocupada")}
            disabled={!mesaSelecionada}
          >
            Ocupada
          </button>
        </div>

        <div className={styles.mesas}>
          {mesas.map((mesa) => (
            <button
              key={mesa.numero}
              className={`${styles.mesa} ${styles[mesa.status]}`}
              onClick={() => setMesaSelecionada(mesa.numero)}
            >
              <strong>{mesa.numero}</strong>
              <span>{mesa.status}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.areaReserva}>
        <h2>Nova Reserva</h2>

        <form className={styles.formReserva}>
          <label>Nome</label>

          <input type="text" placeholder="Digite o nome do cliente" />

          <label>Mesa</label>

          <select
            value={mesaSelecionada}
            onChange={(event) => setMesaSelecionada(event.target.value)}
          >
            <option value="">Selecione a mesa</option>

            {mesas.map((mesa) => (
              <option key={mesa.numero} value={mesa.numero}>
                Mesa {mesa.numero}
              </option>
            ))}
          </select>

          <label>Data</label>
          <input type="date" />

          <label>Horário</label>
          <input type="time" />

          <label>Número de pessoas</label>

          <input type="number" placeholder="Ex: 2" />

          <button type="submit">Salvar Reserva</button>
        </form>
      </div>
    </main>
  );
}

export default Mesas;
