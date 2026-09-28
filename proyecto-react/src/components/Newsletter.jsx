import style from "./Newsletter.module.css";

const Newsletter = () => {
    return (
        <section className={style.newsletter}>
            <div>
                <h4>Suscribite al Newsletter</h4>
                <p>
                    Y recibí novedades y <span>descuentos exclusivos</span>
                </p>
            </div>
            <div className={style.form}>
                <input type="email" name="email" placeholder="Email" />
                <button>Suscribirme</button>
            </div>
        </section>
    );
};

export default Newsletter;