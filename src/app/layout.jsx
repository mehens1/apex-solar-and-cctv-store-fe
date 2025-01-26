import React from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const AppLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />

            <div className="mobile-menu">
                <Navbar />
            </div>

            <div className="search-popup">
                <form>
                    <input type="text" name="search" placeholder="Enter Your Keyword...." />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
                <a href="#" title="" className="close-search"><i className="fa fa-window-close"></i></a>
            </div>

            <div>{children}</div>

            <Footer />

        </div>
    );
};

export default AppLayout;
