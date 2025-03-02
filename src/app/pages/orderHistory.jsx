import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomInput from "../../components/customInput";
import { checkoutService } from "../../services/orderService";
import CustomTextArea from "../../components/customTextArea";
import PrimaryBtn from "../../components/primaryBtn";
import { SweetAlert } from "../../components/customSwal";

import { VAT } from "../../config/constants";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.items) ?? [];

  if(!user) {
    SweetAlert({
      icon: "info",
      title: "Oppsss!",
      text: "You can't access this page because you are not logged in!",
      onConfirm: () => navigate('/store'),
    });
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    billing_address: "",
    shipping_address: "",
    payment_method: "",
    discount_code: "",
    vat: "",
    items: [...cart],
  });

  const [formErrors, setFormErrors] = useState({});
  const [total, setTotal] = useState(0);
  const VAT_RATE = VAT;

  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        first_name: user.firstName ?? "",
        last_name: user.lastName ?? "",
        email: user.email ?? "",
        phone: user.phone ?? "",
        billing_address: user.address ?? "",
        shipping_address: user.address ?? "",
        vat: VAT_RATE,
      }));
    }
  }, [user]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      items: [...cart],
    }));
  }, [cart]);

  useEffect(() => {
    const subTotal = cart.reduce(
      (sum, item) => sum + (item.product.selling_price * item.quantity || 0),
      0
    );
    const vatAmount = subTotal * VAT_RATE;
    setTotal(subTotal + vatAmount);
  }, [cart]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.first_name) errors.first_name = "First name is required";
    if (!formData.last_name) errors.last_name = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Invalid email format";
    if (!formData.phone) errors.phone = "Phone number is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({}); // Reset previous errors

    if (validateForm()) {
      const updatedFormData = {
        ...formData,
        shipping_address: formData.billing_address,
        items: formData.items.map((item) => ({
          id: item.product_id,
          quantity: item.quantity,
        })),
      };

      try {
        setLoading(true);
        const response = await checkoutService(updatedFormData);
        const reference = response.reference;
        
        if (response && response.authorization_url) {
          // window.open(response.authorization_url, "_blank");

          const paymentWindow = window.open(
            response.authorization_url,
            "_blank"
          );

          // Poll for payment completion
          const checkPaymentCompletion = setInterval(async () => {
            if (paymentWindow.closed) {
              clearInterval(checkPaymentCompletion);

              console.log("window reference: ", reference);

              if (reference) {
                verifyPayment(reference);
              } else {
                SweetAlert({
                  icon: "error",
                  title: "Payment Failed",
                  text: "No transaction reference found.",
                });
              }
            }
          }, 2000); // Check every 2 seconds
        }
      } catch (error) {
        SweetAlert({
          icon: "error",
          title: "Error!",
          text: error.message || "An error occurred",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const verifyPayment = async (reference) => {
    console.log("reference: ", reference);
    
    try {
      // const response = await fetch(`http://127.0.0.1:8004/api/order?reference=${reference}`);
      const response = await fetch(`http://127.0.0.1:8004/api/order?trxref=${reference}&reference=${reference}`);
      
      console.log("mememeem reference: ", response);
      const data = await response.json();
  
      if (data.details.status) {
        SweetAlert({
          icon: "success",
          title: "Payment Successful!",
          text: "Your order has been processed.",
        });
  
        // Navigate to success page
        window.location.href = "/order-success";
      } else {
        SweetAlert({
          icon: "error",
          title: "Payment Failed",
          text: "Payment verification failed.",
        });
      }
    } catch (error) {
      console.log("error on verify: ", error);
      SweetAlert({
        icon: "error",
        title: "Error!",
        text: "Could not verify payment.",
      });
    }
  };

  return (
    <section className="page-content">
      <div className="container">
        <div className="shop-page">
          <div className="row">
            <div className="col-lg-9">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Cart</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <CustomInput
                          label="First Name"
                          id="first_name"
                          name="first_name"
                          placeholder="Enter First Name"
                          value={formData.first_name}
                          onChange={handleChange}
                          error={formErrors.first_name}
                          disabled={!isEditing}
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <CustomInput
                          label="Last Name"
                          id="last_name"
                          name="last_name"
                          placeholder="Enter Last Name"
                          value={formData.last_name}
                          onChange={handleChange}
                          error={formErrors.last_name}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <CustomInput
                        label="Email Address"
                        id="email"
                        name="email"
                        placeholder="Enter Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        error={formErrors.email}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="form-group">
                      <CustomInput
                        label="Phone Number"
                        id="phone"
                        name="phone"
                        placeholder="Enter Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        error={formErrors.phone}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="form-group">
                      <CustomTextArea
                        label="Address"
                        id="billing_address"
                        name="billing_address"
                        placeholder="Enter Address"
                        value={formData.billing_address}
                        onChange={handleChange}
                        error={formErrors.billing_address}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="form-row card my-5 mx-5">
                      <label className="my-3">Payment Method</label>

                      <div className="d-flex align-items-center justify-content-between px-5">
                        <div className="form-group">
                          <label htmlFor="card" className="mr-2">
                            Pay by Card
                          </label>
                          <input
                            type="radio"
                            id="card"
                            name="payment_method"
                            value="card"
                            checked={formData.payment_method === "card"}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="transfer" className="mr-2">
                            Pay by Transfer
                          </label>
                          <input
                            type="radio"
                            id="transfer"
                            name="payment_method"
                            value="transfer"
                            checked={formData.payment_method === "transfer"}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="ussd" className="mr-2">
                            Pay by USSD
                          </label>
                          <input
                            type="radio"
                            id="ussd"
                            name="payment_method"
                            value="ussd"
                            checked={formData.payment_method === "ussd"}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group card">
                      <label>Order Items</label>
                      <ul className="list-group">
                        {cart.map((item, index) => (
                          <li
                            key={index}
                            className="list-group-item d-flex justify-content-between"
                          >
                            <span>
                              <span className="font-weight-bold">
                                {item.product.item}
                              </span>{" "}
                              x {item.quantity} pc(s)
                            </span>
                            \{" "}
                            <strong>
                              ₦{" "}
                              {(
                                Number(item.product.selling_price) || 0
                              ).toLocaleString("en-NG", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </strong>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center mt-5">
                      {/* <strong>Total: ₦{total.toFixed(2)}</strong> */}
                      <strong>
                        Total:{" "}
                        <span className="font-weight-bold display-4">
                          {" "}
                          ₦{" "}
                          {(Number(total) || 0).toLocaleString("en-NG", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </strong>
                    </div>

                    <div className="my-3 text-center">
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        {isEditing ? "" : "Edit Order Details"}
                      </button>
                    </div>

                    <PrimaryBtn
                      label="Proceed to Payment"
                      type="submit"
                      loading={loading}
                      disabled={loading || Object.keys(formErrors).length > 0}
                    />
                  </form>
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
