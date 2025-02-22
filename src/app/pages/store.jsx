import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/productService";
import { fetchCategories } from "../../services/categoryService";
import productPlaceholder from '../../assets/images/product-image-placeholder.png';

const Store = () => {
    const [products, setProducts] = useState({});
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    // console.log("products", products);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts(currentPage);
            setProducts(data);
            setLoading(false);
        };

        const loadCategories = async () => {
            const data = await fetchCategories();
            setCategories(data);
            setLoading(false);
        }

        loadProducts();
        loadCategories();
    }, [currentPage]);

    if (loading) {
        return <div className="text-center mt-5">Loading products...</div>;
    }

    const getRandomDiscount = () => Math.floor(Math.random() * 35) + 1;

    return (
        <>
            <section className="page-content">
                <div className="container">
                    <div className="shop-page">
                        <div className="row">
                            <div className="col-lg-9">

                                {!loading && products?.data?.length === 0 && (
                                    <div className="col-12 text-center">
                                        <h4>No products available</h4>
                                    </div>
                                )}

                                {!loading && products?.data?.length > 0 && (
                                    <div className="shop-main">
                                    <div className="shop-head">
                                        <h4>Showing {products.from}–{products.to} of {products.total} results</h4>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="shop-items">
                                        <div className="row">

                                            {!loading && products?.data?.map((product) => {

                                                const discountPercentage = getRandomDiscount();
                                                const discountAmount = (product.selling_price * discountPercentage) / 100;
                                                const discountedPrice = product.selling_price - discountAmount;

                                                return (
                                                    <div key={product.id} className="col-lg-4 col-md-4 col-sm-6 col-6 full_wdth">
                                                        <div className="gallery-col">
                                                            <div className="gallery-img">
                                                                <img src={product.image ?? productPlaceholder} alt={product.name} />
                                                                <ul className="gallery-optz">
                                                                    <li><a href="#" title=""><i className="fa fa-heart"></i></a></li>
                                                                    <li><a href="#" title=""><i className="fa fa-shopping-cart"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <h3><a href="#" title="">{product.item}</a></h3>
                                                            <span>
                                                                <del style={{ fontSize: ".8rem" }} className="text-secondary">₦{product.selling_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</del>
                                                                &nbsp;&nbsp;
                                                                <b>₦{discountedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                                                <small className="text-danger" style={{ fontSize: ".5rem" }}> ({discountPercentage}% OFF)</small>
                                                            </span>
                                                        </div>
                                                    </div>
                                                );

                                                // return (
                                                //     <div key={product.id} className="col-lg-4 col-md-4 col-sm-6 col-6 full_wdth">
                                                //         <div className="gallery-col">
                                                //             <div className="gallery-img">
                                                //                 <img src={product.image ?? productPlaceholder} alt={product.name} />
                                                //                 <ul className="gallery-optz">
                                                //                     <li><a href="#" title=""><i className="fa fa-heart"></i></a></li>
                                                //                     <li><a href="#" title=""><i className="fa fa-shopping-cart"></i></a></li>
                                                //                 </ul>
                                                //             </div>
                                                //             <h3><a href="#" title="">{product.item}</a></h3>
                                                //             <span>
                                                //                 <del className="text-secondary">₦{(product.selling_price * 0.21 + product.selling_price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</del>
                                                //                 &nbsp;&nbsp; <b>₦{(product.selling_price * 1).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                                //             </span>
                                                //         </div>
                                                //     </div>
                                                // )
                                            })}
                                        </div>
                                    </div>
                                    <div className="serity-pagination">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className={`page-item ${!products.prev_page_url && "disabled"}`}>
                                                    <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={!products.prev_page_url}>
                                                        <i className="fa fa-angle-double-left"></i> Prev
                                                    </button>
                                                </li>


                                                {[...Array(products.last_page)].map((_, index) => (
                                                    <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                                        <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                                            {index + 1}
                                                        </button>
                                                    </li>
                                                ))}

                                                <li className={`page-item ${!products.next_page_url && "disabled"}`}>
                                                    <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={!products.next_page_url}>
                                                        Next <i className="fa fa-angle-double-right"></i>
                                                    </button>
                                                </li>
                                                {/* <button
                                                    className="page-link"
                                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                    disabled={!products.prev_page_url}
                                                >
                                                    <i className="fa fa-angle-double-left"></i> Prev
                                                </button>

                                                {[...Array(products.last_page)].map((_, index) => (
                                                    <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                                        <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                                            {index + 1}
                                                        </button>
                                                    </li>
                                                ))}

                                                <button
                                                    className="page-link"
                                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, products.last_page))}
                                                    disabled={!products.next_page_url}
                                                >
                                                    Next <i className="fa fa-angle-double-right"></i>
                                                </button> */}


                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                )}
                            </div>
                            <div className="col-lg-3">
                                <div className="sidebar shop-sidebar">
                                    <div className="widget widget-search">
                                        <form>
                                            <input type="text" name="search" placeholder="Search ...." />
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                    <div className="widget widget-shop-categories">
                                        <h3 className="widget-title">Shop By Categories</h3>
                                        <ul>
                                            {categories.map(
                                                (category) => (
                                                    <li key={category.id}>
                                                        <a href="#" title="">{category.name}</a>
                                                        <span>{category.products_count}</span>
                                                    </li>
                                                )
                                            )}

                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                    {/* <div className="widget widget-filter">
                                        <h3 className="widget-title">Price Fliter</h3>
                                        <form>
                                            <div id="slider-range"></div>
                                            <button type="submit" className="btn-style2">Filter</button>
                                            <div className="price-bx">
                                                <input type="text" id="amount" readOnly />
                                            </div>
                                            <div className="clearfix"></div>
                                        </form>
                                    </div> */}
                                    {/* <div className="widget widget-products">
                                        <h3 className="widget-title">Top Rated Products</h3>
                                        <ul className="products-list">
                                            <li>
                                                <div className="wd-product">
                                                    <div className="wd-product-thumb">
                                                        <img src="/src/assets/images/resources/sp1.jpg" alt="" />
                                                        <span className="sale">Sale</span>
                                                        <a href="shop-details.html" title="" className="ext-link"></a>
                                                    </div>
                                                    <div className="wd-product-info">
                                                        <h3><a href="shop-details.html" title="">CCTV Camera</a></h3>
                                                        <ul className="pd-rating">
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star-half-alt"></i></li>
                                                        </ul>
                                                        <span><del>$15.00</del>$12.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="wd-product">
                                                    <div className="wd-product-thumb">
                                                        <img src="/src/assets/images/resources/sp2.jpg" alt="" />
                                                        <a href="shop-details.html" title="" className="ext-link"></a>
                                                    </div>
                                                    <div className="wd-product-info">
                                                        <h3><a href="shop-details.html" title="">CCTV Camera</a></h3>
                                                        <ul className="pd-rating">
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star-half-alt"></i></li>
                                                        </ul>
                                                        <span><del>$15.00</del>$12.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="wd-product">
                                                    <div className="wd-product-thumb">
                                                        <img src="/src/assets/images/resources/sp3.jpg" alt="" />
                                                        <a href="shop-details.html" title="" className="ext-link"></a>
                                                    </div>
                                                    <div className="wd-product-info">
                                                        <h3><a href="shop-details.html" title="">CCTV Camera</a></h3>
                                                        <ul className="pd-rating">
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star-half-alt"></i></li>
                                                        </ul>
                                                        <span><del>$15.00</del>$12.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="partner-section">
                <div className="container">
                    <ul className="pt-carousel">
                        <li><img src="/src/assets/images/resources/pt-logo1.png" alt="" /></li>
                        <li><img src="/src/assets/images/resources/pt-logo2.png" alt="" /></li>
                        <li><img src="/src/assets/images/resources/pt-logo3.png" alt="" /></li>
                        <li><img src="/src/assets/images/resources/pt-logo4.png" alt="" /></li>
                        <li><img src="/src/assets/images/resources/pt-logo1.png" alt="" /></li>
                        <li><img src="/src/assets/images/resources/pt-logo2.png" alt="" /></li>
                        <li><img src="/src/assets/images/resources/pt-logo3.png" alt="" /></li>
                        <li><img src="/src/assets/images/resources/pt-logo4.png" alt="" /></li>
                    </ul>
                </div>
            </section> */}
        </>
    )
}

export default Store;
