import styles from "./Reservas.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function buscarReservas() {
      try {
        const resposta = await axios.get("http://localhost:3001/reservas");

        setReservas(resposta.data);
      } catch (erro) {
        console.log("Erro ao buscar reservas:", erro);
      }
    }

    buscarReservas();
  }, []);

  async function cancelarReserva(id) {
    try {
      await axios.delete(`http://localhost:3001/reservas/${id}`);

      setReservas(reservas.filter((reserva) => reserva.id !== id));
    } catch (erro) {
      console.log("Erro ao cancelar reserva:", erro);
    }
  }

  const reservasFiltradas = reservas.filter((reserva) =>
    reserva.nome.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <main className={styles.reservas}>
      <div className={styles.topo}>
        <div>
          <h1>Reservas</h1>
          <p>Veja e gerencie todas as reservas do restaurante.</p>
        </div>

        <button className={styles.novaReserva}>+ Nova Reserva</button>
      </div>

      <div className={styles.filtros}>
        <input
          type="text"
          placeholder="Buscar por nome do cliente..."
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
        />

        <input type="date" />

        <select>
          <option>Todos os status</option>
          <option>Reservada</option>
          <option>Ocupada</option>
          <option>Cancelada</option>
        </select>
      </div>

      <div className={styles.tabelaContainer}>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Mesa</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Pessoas</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {reservasFiltradas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.nome}</td>
                <td>{reserva.mesa}</td>
                <td>{reserva.data}</td>
                <td>{reserva.horario}</td>
                <td>{reserva.pessoas}</td>
                <td>Reservada</td>

                <td>
                  <button>Editar</button>

                  <button onClick={() => cancelarReserva(reserva.id)}>
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Reservas;
