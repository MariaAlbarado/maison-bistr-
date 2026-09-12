import styles from "./Reservas.module.css";

function Reservas() {
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
        <input type="text" placeholder="Buscar por nome do cliente..." />

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
            <tr>
              <td>Ana Silva</td>
              <td>02</td>
              <td>15/09/2026</td>
              <td>19:30</td>
              <td>2</td>
              <td>Reservada</td>
              <td>
                <button>Editar</button>
                <button>Cancelar</button>
              </td>
            </tr>

            <tr>
              <td>João Pereira</td>
              <td>07</td>
              <td>15/09/2026</td>
              <td>20:00</td>
              <td>4</td>
              <td>Reservada</td>
              <td>
                <button>Editar</button>
                <button>Cancelar</button>
              </td>
            </tr>

            <tr>
              <td>Maria Souza</td>
              <td>11</td>
              <td>16/09/2026</td>
              <td>21:00</td>
              <td>3</td>
              <td>Ocupada</td>
              <td>
                <button>Editar</button>
                <button>Cancelar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Reservas;
