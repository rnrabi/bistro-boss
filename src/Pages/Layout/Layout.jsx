import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Home/Navber/Footer/Footer";
import Navber from "../Home/Navber/Navber";


const Layout = () => {
    const location = useLocation()
    // console.log(location)
    const noHeaderFooter = location.pathname.includes('login');
    return (
        <div>
           {noHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Layout;