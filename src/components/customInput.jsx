import PropTypes from "prop-types";

const CustomInput = ({
  label,
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  helperText,
  error,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={`form-control my-2 ${error ? "is-invalid" : ""}`}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
      {helperText && !error && <div className="form-text">{helperText}</div>}
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  error: PropTypes.string,
};

export default CustomInput;
