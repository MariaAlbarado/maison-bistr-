import styles from "./Home.module.css";
import restaurante from "../../assets/maison_login_foto.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <main
      className={styles.home}
      style={{ backgroundImage: `url(${restaurante})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.conteudo}>
          <p className={styles.subtitulo}>BEM-VINDO AO MAISON</p>

          <h1>Sabores que criam memórias</h1>

          <h2>Mais que um restaurante, uma experiência.</h2>

          <p className={styles.texto}>
            Sabores autênticos, ambiente acolhedor e momentos especiais que
            ficam na memória.
          </p>

          <div className={styles.botoes}>
            <div className={styles.botoes}>
              <Link to="/reservas">
                <button>Fazer uma reserva</button>
              </Link>

              <Link to="/mesas">
                <button>Ver mesas</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
