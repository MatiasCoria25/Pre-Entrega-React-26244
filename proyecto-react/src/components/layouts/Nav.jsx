import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <img
        src="https://i.ibb.co/tMr83KNq/Logo.png"
        alt="Arcadia"
        className={styles.logo}
      />

      <div className={styles.navLinks}>
        <Link to="/">Inicio</Link>
        <a>Categoría</a>
        <Link to="/productos">Productos</Link>
        <a>Juegos</a>
        <Link to="/contacto">Contacto</Link>
      </div>

      <div className={styles.busqueda}>
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
        />
      </div>

      <div className={styles.icons}>
        <img src="./images/login.png" alt="Iniciar sesión" />
        <img src="./images/favorito.png" alt="Favoritos" />
        <img src="./images/carrito.png" alt="Carrito de compras" />
      </div>
    </nav>
  );
};

export default Nav;