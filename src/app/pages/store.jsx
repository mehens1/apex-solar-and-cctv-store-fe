import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/productService";
import { fetchCategories } from "../../services/categoryService";
import productPlaceholder from "../../assets/images/product-image-placeholder.png";
import { handleAddToCart } from "../../utils/handleAddToCart";
import { useDispatch, useSelector } from "react-redux";

const Store = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [products, setProducts] = useState({ data: [] });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(currentPage);
      setProducts(data);
    };

    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([loadProducts(), loadCategories()]);
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

  if (loading) {
    return <div className="text-center mt-5">Loading products...</div>;
  }

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
                      <h4>
                        Showing {products.from}–{products.to} of{" "}
                        {products.total} results
                      </h4>
                      <div className="clearfix"></div>
                    </div>
                    <div className="shop-items">
                      <div className="row">
                        {!loading &&
                          products?.data?.map((product) => {
                            return (
                              <div
                                key={product.id}
                                className="col-lg-4 col-md-4 col-sm-6 col-6 full_wdth"
                              >
                                <div className="gallery-col">
                                  <div className="gallery-img">
                                    <img
                                      src={product.image || productPlaceholder}
                                      alt={product.item}
                                      onError={(e) =>
                                        (e.target.src = productPlaceholder)
                                      }
                                    />
                                    <ul className="gallery-optz">
                                      <li>
                                        <a
                                          href="#"
                                          title={`Add ${product.item} to Favorite`}
                                        >
                                          <i className="fa fa-heart"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          onClick={() =>
                                            handleAddToCart(
                                              dispatch,
                                              product,
                                              user
                                            )
                                          }
                                          title={`Add ${product.item} to Cart`}
                                        >
                                          <i className="fa fa-shopping-cart"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h3>
                                    <a href="#" title="">
                                      {product.item}
                                    </a>
                                  </h3>
                                  <span>
                                    <b>
                                      ₦{" "}
                                      {(
                                        Number(product.selling_price) || 0
                                      ).toLocaleString("en-NG", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      })}
                                    </b>
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    <div className="serity-pagination">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination">
                          <li
                            className={`page-item ${
                              !products.prev_page_url ? "disabled" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(currentPage - 1)}
                              disabled={!products.prev_page_url}
                            >
                              <i className="fa fa-angle-double-left"></i> Prev
                            </button>
                          </li>

                          {Array.from(
                            { length: products.last_page },
                            (_, index) => (
                              <li
                                key={index}
                                className={`page-item ${
                                  currentPage === index + 1 ? "active" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={() => setCurrentPage(index + 1)}
                                >
                                  {index + 1}
                                </button>
                              </li>
                            )
                          )}

                          <li
                            className={`page-item ${
                              !products.next_page_url ? "disabled" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(currentPage + 1)}
                              disabled={!products.next_page_url}
                            >
                              Next <i className="fa fa-angle-double-right"></i>
                            </button>
                          </li>
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
                      <input
                        type="text"
                        name="search"
                        placeholder="Search ...."
                      />
                      <button type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="widget widget-shop-categories">
                    <h3 className="widget-title">Shop By Categories</h3>
                    <ul>
                      {categories.map((category) => (
                        <li key={category.id}>
                          <a href="#" title="">
                            {category.name}
                          </a>
                          <span>{category.products_count}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
