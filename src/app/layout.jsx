import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import logo from "../../public/assets/images/logo.png";
import logo from "../../public/assets/images/logo.png";

const AppLayout = ({ children }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="wrapper">
      <Header />

      <div className="mobile-menu">
        <ul>
          <li>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </li>
        </ul>

        <Navbar />

        <ul>
          {!user ? (
            <li style={{ backgroundColor: "#ffb200" }}>
              <NavLink
                to="/login"
                style={{ color: "#fff" }}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            </li>
          ) : (
            <li style={{ backgroundColor: "#ffb200" }}>
              <NavLink
                to="/"
                style={{ color: "#fff" }}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="search-popup">
        <form>
          <input
            type="text"
            name="search"
            placeholder="Enter Your Keyword...."
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <a href="#" title="" className="close-search">
          <i className="fa fa-window-close"></i>
        </a>
      </div>

      <div>{children}</div>

      <Footer />
    </div>
  );
};

AppLayout.propTypes;

export default AppLayout;
