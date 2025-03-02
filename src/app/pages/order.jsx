import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { orderDetailsService } from "../../services/orderService";
import { SweetAlert } from "../../components/customSwal";
import { useSelector } from "react-redux";

const Order = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");

  if(!user) {
    SweetAlert({
      icon: "info",
      title: "Oppsss!",
      text: "You can't access this page because you are not logged in!",
      onConfirm: () => navigate('/store'),
    });
  };

  useEffect(() => {
    if (!reference) {
      SweetAlert({
        icon: "info",
        title: "Oppsss!",
        text: "You can't access this page this time!",
        onConfirm: () => navigate('/order-history'),
      });
    }
  }, [reference, navigate]);

  // Early return if no reference to prevent further rendering/fetching
  if (!reference) return null;

  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  // Effect to load order details when reference is available
  useEffect(() => {
    const loadOrderDetails = async () => {
      try {
        setLoading(true);
        const response = await orderDetailsService(reference);
        console.log("Order details response:", response);
        setOrderDetails(response.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
        SweetAlert({
          icon: "error",
          title: "Error!",
          text: error.message || "An error occurred while fetching order details.",
        });
      } finally {
        setLoading(false);
      }
    };

    loadOrderDetails();
  }, [reference]);

  return (
    <section className="page-content">
      <div className="container">
        <div className="shop-page">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Order Details</h5>
                </div>
                <div className="card-body">
                  {loading && <p>Loading order details...</p>}
                  {!loading && orderDetails ? (
                    <pre>{JSON.stringify(orderDetails, null, 2)}</pre>
                  ) : (
                    !loading && <p>No order details found...</p>
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

export default Order;
