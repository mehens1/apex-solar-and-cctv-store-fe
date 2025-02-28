import PropTypes from "prop-types";

const PrimaryBtn = ({ label, loading, type = "submit", disabled = false, ...rest }) => {
  return (
    <button
      type={type}
      className="btn lnk-default w-100 mt-3"
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

PrimaryBtn.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default PrimaryBtn;
