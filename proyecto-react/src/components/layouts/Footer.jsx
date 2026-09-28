import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            {/* Contenedor de secciones */}
            <div className={style.footerContent}>
                <div className={style.footer}>
                    <h4>Contacto</h4>
                    <p><strong>Dirección:</strong> Av. Siempreviva 742, Ciudad Autónoma de Buenos Aires</p>
                    <p><strong>Teléfono:</strong> +54 11 1234 5678</p>
                    <p><strong>Horario:</strong> 9:00 - 18:00, Lunes a Viernes</p>
                    <div className={style.follow}>
                        <h4>Seguinos</h4>
                        <div className={style.icon}>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>

                <div className={style.footer}>
                    <h4>Mi Cuenta</h4>
                    <a href="#">Iniciar Sesión</a>
                    <a href="#">Ver Carrito</a>
                    <a href="#">Mis Favoritos</a>
                    <a href="#">Seguimiento de Pedido</a>
                    <a href="#">Ayuda</a>
                </div>

                <div className={style.footer}>
                    <h4>Descargá la App</h4>
                    <p>Desde App Store o Google Play</p>
                    <div className={style.fila}>
                        <img src="https://i.ibb.co/Fk2SDpfH/app.jpg" alt="App Store" />
                        <img src="https://i.ibb.co/27rTzMPz/play.jpg" alt="Google Play" />
                    </div>
                    <p>Pasarelas de pago seguras</p>
                    <img src="https://i.ibb.co/V0q2yP7d/pay.png" alt="Métodos de Pago" />
                </div>
            </div>

            {/* Copyright separado */}
            <div className={style.copyright}>
                <p>© 2026, Matias Gustavo Coria | Talento Tech - Ecommerce</p>
            </div>
        </footer>
    )
}

export default Footer;

            

