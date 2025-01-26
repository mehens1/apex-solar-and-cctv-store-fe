import React from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const InnerLayout = ({ children }) => {
    return (
        <>
            <section className="pager-sec overlay-dark">
                <div className="container">
                    <div className="pager-sec-details">
                        <h2>Shop</h2>
                        <ul className="breadcrumb">
                            <li><a href="#" title="">Home</a></li>
                            <li><span>&nbsp; Shop</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <main>{children}</main>
        </>
    );
};

export default InnerLayout;
