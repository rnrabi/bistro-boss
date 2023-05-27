import { Outlet } from "react-router-dom";
import Footer from "../Home/Navber/Footer/Footer";
import Navber from "../Home/Navber/Navber";


const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;