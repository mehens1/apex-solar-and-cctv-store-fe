const InnerLayout = ({ children, title }) => {
    return (
        <>
            <section className="pager-sec overlay-dark">
                <div className="container">
                    <div className="pager-sec-details">
                        <h2>{title}</h2>
                        <ul className="breadcrumb">
                            <li><a href="#" title="">Home</a></li>
                            <li><span>&nbsp; {title}</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <main>{children}</main>
        </>
    );
};

InnerLayout.propTypes;

export default InnerLayout;
