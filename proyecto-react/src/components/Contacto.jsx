import styles from "./Contacto.module.css";

const Contacto = () => {
    return (
        <section className={styles.contacto}>
            <div className={styles.formulario}>
                <h2>Contacto</h2>
                <p>Dejanos un mensaje</p>

                <form>
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Mail" />
                    <input type="tel" placeholder="Teléfono (opcional)" />
                    <textarea placeholder="Mensaje"></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div className={styles.imagen}>
                <img
                    src="https://i.ibb.co/4wJSpYKn/Arcade.jpg"
                    alt="Banner Arcade"
                />
            </div>
        </section>
    );
};

export default Contacto;