import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CustomInput from "../../components/customInput";
import { register } from "../../services/authService";
import useFormValidator from "../../hooks/useFormValidator";
import { validateRegister } from "../../utils/validationRules";

const Register = () => {
  const {
    formData,
    errors,
    loading,
    handleChange,
    validateForm,
    setLoading,
    setErrors,
  } = useFormValidator(
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validateRegister
  );

  const [apiError, setApiError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setApiError(null);
    setSuccessMessage(null);

    try {
      await register(formData);
      setSuccessMessage("Registration successful! Redirecting...");
      localStorage.setItem("registerSuccess", "Registration successful! Please log in.");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setErrors({ general: error.message });
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-page">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12">
            <div className="login-form p-4 card shadow-lg rounded bg-white">
              <form onSubmit={handleSubmit}>
                {apiError && (
                  <div className="alert alert-danger">{apiError}</div>
                )}
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}

                <CustomInput
                  label="Enter First Name"
                  placeholder="First Name"
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />

                <CustomInput
                  label="Enter Last Name"
                  placeholder="Last Name"
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />

                <CustomInput
                  label="Enter Email Address"
                  placeholder="Email Address"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <CustomInput
                  label="Enter Phone Number"
                  placeholder="Phone Number"
                  id="phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />

                <CustomInput
                  label="Password"
                  placeholder="Password"
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                />

                <CustomInput
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                />

                <button
                  type="submit"
                  className="btn lnk-default w-100 mt-3"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </form>
            </div>

            <div className="text-center mt-5">
              Already a member?{" "}
              <NavLink to="/login">
                <span className="text-muted">Login</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
