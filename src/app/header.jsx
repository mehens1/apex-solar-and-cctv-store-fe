import { CONTACT_INFO } from "../config/constants";
import Navbar from "./navbar";
import logo from "/assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearToken } from "../store/actions/authAction";
import { clearUser } from "../store/actions/userAction";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems?.length || 0;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearToken());
    dispatch(clearUser());
  };

  return (
    <header>
      <div className="top-header">
        <div className="container">
          <div className="top-header-content">
            <ul className="contact-info">
              <li>
                <i className="fa fa-envelope"></i>
                <span>
                  <a href={"mailto:" + CONTACT_INFO.email}></a>
                  {CONTACT_INFO.email}
                </span>
              </li>
              <li>
                <i className="fa fa-map-marker-alt"></i>
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="#" title="">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="/" title="">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <a href="#" title="" className="menu-btn">
              <i className="fa fa-bars"></i>
            </a>

            <a
              href="#"
              title=""
              onClick={() => navigate('/cart')}
              className="cart-btn mr-3"
              style={{ position: "relative" }}
            >
              <i
                className="fa-solid fa-cart-shopping primary-text"
                style={{ fontSize: "0.7em" }}
              ></i>
              {cartItemCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 5px",
                    fontSize: "0.3em",
                    lineHeight: 1,
                  }}
                >
                  {cartItemCount}
                </span>
              )}
            </a>
            <nav>
              <Navbar />
            </nav>

            {!user ? (
              <NavLink to="/login" className="quote-btn">
                Login
              </NavLink>
            ) : (
              <div className="dropdown search-frm">
                <div
                  href="#"
                  title="Profile"
                  className="profile-btn"
                >
                  <i
                    className="fa fa-user-circle dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></i>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item">
                      {user.firstName} {user.lastName}
                    </a>
                    <NavLink to="/order-history" className="dropdown-item">
                      Order History
                    </NavLink>

                    <NavLink to="/profile" className="dropdown-item">
                      Profile
                    </NavLink>

                    <a className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="pl-5 search-frm">
              <NavLink to={"/cart"} title="Cart">
              <a
              href="#"
              title=""
              className=""
              style={{ position: "relative" }}
            >
              <i
                className="fa-solid fa-cart-shopping primary-text"
                style={{ fontSize: "1.7em" }}
              ></i>
              {cartItemCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-10px",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 5px",
                    // fontSize: "0.3em",
                    lineHeight: 1,
                  }}
                >
                  {cartItemCount}
                </span>
              )}
            </a>
              </NavLink>
            </div>

            <div className="search-frm">
              <a href="#" title="Search" className="search-btn">
                <i className="fa fa-search"></i>
              </a>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
