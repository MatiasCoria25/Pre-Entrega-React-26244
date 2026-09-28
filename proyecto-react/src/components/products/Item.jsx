import { useState } from "react";
import BotonFavorito from "../BotonFavorito";
import styles from "./Item.module.css";

const Item = ({ nombre, precio, imagen }) => {
  const [contador, setContador] = useState(0);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.h2}>{nombre}</h2>
        <BotonFavorito />
      </div>
      <img src={imagen} alt={nombre} className={styles.image} />
      <p className={styles.price}>AR${precio}</p>
      <div className={styles.controls}>
        <button onClick={() => setContador(contador - 1)}>-</button>
        <span>{contador}</span>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default Item;