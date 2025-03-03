import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SweetAlert } from "../../components/customSwal";
import { useNavigate } from "react-router-dom";
import { orderHistoryService } from "../../services/orderService";
import { formatDate } from "../../utils/dateUtil";

const OrderHistory = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  // Use an array for orders if you expect multiple orders
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // Run on mount and when `user` changes
  useEffect(() => {
    if (!user) {
      SweetAlert({
        icon: "info",
        title: "Oppsss!",
        text: "You can't access this page because you are not logged in!",
        onConfirm: () => navigate("/store"),
      });
    } else {
      fetchOrderHistory(user.id);
    }
  }, [user, navigate]);

  const fetchOrderHistory = async (reference) => {
    try {
      setLoading(true);
      const response = await orderHistoryService(reference);
      console.log("Order history response:", response);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching order history:", error);
      SweetAlert({
        icon: "error",
        title: "Error!",
        text:
          error.message || "An error occurred while fetching order history.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-content">
      <div className="container">
        <div className="shop-page">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Order History</h5>
                </div>
                <div className="card-body">
                  {loading ? (
                    <p>Loading...</p>
                  ) : orders.length === 0 ? (
                    <p>No orders found.</p>
                  ) : (
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Reference Number</th>
                          <th scope="col">Status</th>
                          <th scope="col">Date Created</th>
                          <th scope="col">Action(s)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.id}>
                            <td>{order.reference_number}</td>
                            <td>{order.status}</td>
                            <td>{formatDate(order.created_at)}</td>
                            <td>
                              <i
                                className="fa-solid fa-eye hand-pointer primary-text"
                                onClick={() => navigate(`/order-details?reference=${order.reference_number}`)
                                }
                              ></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
