import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CustomInput from "../../components/customInput.jsx";
import { login } from "../../services/authService";
import useFormValidator from "../../hooks/useFormValidator";
import { validateLogin } from "../../utils/validationRules";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions/userAction.jsx";
import { setToken } from "../../store/actions/authAction.jsx";

const Login = () => {
  const dispatch = useDispatch();

  const {
    formData,
    errors,
    loading,
    handleChange,
    validateForm,
    setLoading,
    setErrors,
  } = useFormValidator({ identifier: "", password: "" }, validateLogin);

  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setApiError(null);

    try {
      const response = await login(formData);
      const { token, user } = response;
      dispatch(setToken(token));
      dispatch(setUser(user));

      navigate("/store");
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

                <CustomInput
                  label="Email Address or Phone Number"
                  placeholder="Email Address or Phone Number"
                  id="identifier"
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  error={errors.identifier}
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

                <div className="text-right mb-3">
                  <a href="#" className="text-muted">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn lnk-default w-100 mt-3"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
            </div>

            <div className="text-center mt-5">
              New Here?{" "}
              <NavLink to="/register">
                <span className="text-muted">Register</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
