import styles from "./Mesas.module.css";
import { useState } from "react";

import axios from "axios";

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

  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [pessoas, setPessoas] = useState("");

  function mudarStatus(novoStatus) {
    setMesas(
      mesas.map((mesa) =>
        mesa.numero === mesaSelecionada
          ? { ...mesa, status: novoStatus }
          : mesa,
      ),
    );
  }

  async function salvarReserva(event) {
    event.preventDefault();

    try {
      const resposta = await axios.post("http://localhost:3001/reservas", {
        nome,
        mesa: mesaSelecionada,
        data,
        horario,
        pessoas,
      });

      console.log(resposta.data);

      alert("Reserva salva com sucesso!");

      setNome("");
      setMesaSelecionada("");
      setData("");
      setHorario("");
      setPessoas("");
    } catch (erro) {
      console.log("Erro ao salvar reserva:", erro);
      alert("Erro ao salvar reserva.");
    }
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

        <form className={styles.formReserva} onSubmit={salvarReserva}>
          <label>Nome</label>

          <input
            type="text"
            placeholder="Digite o nome do cliente"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />

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
          <input
            type="date"
            value={data}
            onChange={(event) => setData(event.target.value)}
          />

          <label>Horário</label>
          <input
            type="time"
            value={horario}
            onChange={(event) => setHorario(event.target.value)}
          />

          <label>Número de pessoas</label>

          <input
            type="number"
            placeholder="Ex: 2"
            value={pessoas}
            onChange={(event) => setPessoas(event.target.value)}
          />

          <button type="submit">Salvar Reserva</button>
        </form>
      </div>
    </main>
  );
}

export default Mesas;
