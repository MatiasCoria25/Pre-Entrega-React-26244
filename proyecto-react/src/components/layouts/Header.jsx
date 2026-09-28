import Nav from './Nav';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Nav />
            <img 
                src="https://i.ibb.co/6RQm4763/Arcadia.png" 
                alt="Banner Arcadia" 
                className={styles.banner}
            />
        </header>
    );
};

export default Header;