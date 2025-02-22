import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/store"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Store
                </NavLink>
            </li>
        </ul>
    );
};

export default Navbar;
