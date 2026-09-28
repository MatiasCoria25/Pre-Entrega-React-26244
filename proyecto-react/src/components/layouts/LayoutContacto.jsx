import Nav from "./Nav";
import Newsletter from "../Newsletter";
import Contacto from "../Contacto";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Nav/>
            <main>
                <Outlet/>
                <Contacto />
                <Newsletter />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;