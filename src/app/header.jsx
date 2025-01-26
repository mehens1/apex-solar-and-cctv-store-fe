import { CONTACT_INFO } from "../config/constants";
import Navbar from "./navbar";

const Header = () => {
    return (
        <header>
            <div className="top-header">
                <div className="container">
                    <div className="top-header-content">
                        <ul className="contact-info">
                            <li>
                                <i className="fa fa-envelope"></i>
                                <span><a href={"mailto: " + CONTACT_INFO.email}></a>{CONTACT_INFO.email}</span>
                            </li>
                            <li>
                                <i className="fa fa-map-marker-alt"></i>
                                <span>{CONTACT_INFO.address}</span>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li>
                                <a href="#" title=""><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="#" title=""><i className="fab fa-linkedin-in"></i></a>
                            </li>
                            <li>
                                <a href="#" title=""><i className="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" title=""><i className="fab fa-pinterest-p"></i></a>
                            </li>
                            <li>
                                <a href="#" title=""><i className="fab fa-instagram"></i></a>
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
                                <img src="assets/images/logo.png" alt="" />
                            </a>
                        </div>
                        <a href="#" title="" className="menu-btn"><i className="fa fa-bars"></i></a>
                        <nav>
                            <Navbar />
                        </nav>
                        <a href="#" title="" className="quote-btn">Get A Quote</a>

                        <div className="cart-dv">
                            <a href="#" title="" className="cart-btn">
                                <img src="assets/images/cart.png" alt="" />
                            </a>
                        </div>
                        <div className="search-frm">
                            <a href="#" title="" className="search-btn">
                                <i className="fa fa-search"></i>
                            </a>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;