import { COMPANY_FULL_NAME, CONTACT_INFO } from "../config/constants";

const Footer = () => {

    function currentYear() {
        return new Date().getFullYear();
    }

    return (
        <footer>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="widget widget-about">
                                <img src="assets/images/logo.png" alt="" />
                                <p>Security as a topic has continued to rise in popularity in the recent couple of
                                    years, and it comes as a no surprise.</p>
                                <p>Security and privacy are two sides of the same coin. You can’t have privacy without
                                    security and vice versa.</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="widget widget-services">
                                <h3 className="widget-title">Services</h3>
                                <ul>
                                    <li><i className="fa fa-map-marker-alt"></i> <span>{CONTACT_INFO.address}</span></li>
                                    <li><i className="fa fa-envelope"></i> <span><a href={"mailto:" + CONTACT_INFO.email}>{CONTACT_INFO.email}</a></span></li>
                                    <li><i className="fa fa-phone-volume"></i> <span><a href={"tel:" + CONTACT_INFO.phone}>{CONTACT_INFO.phone}</a></span></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="widget widget-social">
                                <h3 className="widget-title">Follow Us</h3>
                                <ul className="socio-links">
                                    <li><a href="#" title=""><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" title=""><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#" title=""><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" title=""><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-strip">
                <div className="container">
                    <div className="copyright-text">
                        <p>Copyright © {currentYear()}, {COMPANY_FULL_NAME}. All Right Reserved</p>
                        <a href="#" title="" className="scrollUp"><i className="fa fa-level-up-alt"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;