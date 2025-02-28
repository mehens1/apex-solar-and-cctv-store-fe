import PropTypes from "prop-types";

const CustomTextArea = ({
  label,
  type = "text",
  id,
  name,
  placeholder = "",
  value = "",
  onChange,
  helperText,
  error,
  disabled = false,
  ...rest
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <textarea
        type={type}
        name={name}
        className={`form-control w-100 my-2 ${error ? "is-invalid" : ""}`}
        id={id}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={error ? "true" : "false"}
        {...rest} // Spread any extra props
      />
      {/* </textarea> */}
      {error && <div className="invalid-feedback">{error}</div>}
      {helperText && !error && <div className="form-text">{helperText}</div>}
    </div>
  );
};

CustomTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CustomTextArea;
