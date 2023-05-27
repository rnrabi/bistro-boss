import { Link } from "react-router-dom";


const Navber = () => {
    return (
        <div className="fixed z-10 navbar opacity-25 text-white-200 bg-red-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li> <Link to='/order'>Order</Link></li>
                    <li> <Link to='/contact'>Contact</Link></li>
                    <li> <Link to='/menu'>Menu</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navber;