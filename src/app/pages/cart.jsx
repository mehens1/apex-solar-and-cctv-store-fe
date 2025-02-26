import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartService } from "../../services/cartService";
import { setCart } from "../../store/actions/cartAction";


const Cart = () => {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.items) ?? [];
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const VAT_RATE = 0.0;

  // Fetch cart only when user changes
  useEffect(() => {
    const loadCart = async () => {
      if (user) {
        const data = await fetchCartService();
        dispatch(setCart(data.items));
      }
    };
    loadCart();
  }, [user, dispatch]);

  // Calculate total when cart updates
  useEffect(() => {
    const newTotal = cart.reduce(
      (sum, item) => sum + item.selling_price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: "UPDATE_CART_QUANTITY", payload: { id, quantity } });
    }
  };

  return (
    <section className="page-content">
      <div className="container">
        <div className="shop-page">
          <div className="row">
            {/* Cart Items */}
            <div className="col-lg-9">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Cart</h5>
                </div>
                <div className="card-body">
                  {cart.length > 0 ? (
                    cart.map((item) => (
                      <div key={item.id}>
                        <div className="cart-item row d-flex justify-content-between align-items-center mb-3">
                          <div className="col-9">
                            <h6 style={{ fontSize: "2rem" }}>{item.item}</h6>
                            <p className="mt-3">
                              ₦
                              {Number(item.selling_price).toLocaleString(
                                "en-NG",
                                {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                }
                              )}{" "}
                              x {item.quantity}
                            </p>
                          </div>
                          <div className="col-md-3 col-sm-12">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.id,
                                  parseInt(e.target.value)
                                )
                              }
                              className="form-control w-50 d-inline-block me-2"
                            />
                            <br />
                            <span
                              className="text-danger font-weight-bold hand-pointer"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              Remove
                            </span>
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))
                  ) : (
                    <p>Your cart is empty.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Checkout Summary */}
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Checkout Preview</h5>
                </div>
                <div className="card-body">
                  <p>
                    <strong className="font-weight-bold">Subtotal: </strong>₦
                    {Number(total).toLocaleString("en-NG", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p className="py-3">
                    <strong className="font-weight-bold">VAT: </strong>₦
                    {Number(total * VAT_RATE).toLocaleString("en-NG", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p>
                    <strong className="font-weight-bold">Total: </strong>₦
                    {Number(total * (1 + VAT_RATE)).toLocaleString("en-NG", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <button className="btn btn-primary w-100 my-3">
                    Proceed to Checkout
                  </button>

                  <span className="mt-3"><span className="text-danger">PS: </span> <strong className="font-weight-bold">Delivery fee excluded!</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
