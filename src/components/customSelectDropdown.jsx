import PropTypes from "prop-types";

const CustomSelectDropdown = ({
  label,
  id,
  name,
  value,
  options = [],
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
      <select
        name={name}
        className={`form-control w-100 my-2 ${error ? "is-invalid" : ""}`}
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={error ? "true" : "false"}
        {...rest}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
      {helperText && !error && <div className="form-text">{helperText}</div>}
    </div>
  );
};

CustomSelectDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CustomSelectDropdown;
