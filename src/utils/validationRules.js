export const validateRegister = (formData) => {
    let errors = {};
  
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = "Invalid email format";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!/^\d{10,15}$/.test(formData.phone)) errors.phone = "Invalid phone number";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password.length < 6) errors.password = "Password must be at least 6 characters";
    if (!formData.confirmPassword) errors.confirmPassword = "Confirm password is required";
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match";
  
    return errors;
  };
  
  export const validateLogin = (formData) => {
    let errors = {};
  
    if (!formData.identifier.trim()) {
      errors.identifier = "Email or phone number is required";
    } else if (
      !/^\S+@\S+\.\S+$/.test(formData.identifier) &&
      !/^\+?\d{7,15}$/.test(formData.identifier)
    ) {
      errors.identifier = "Invalid email or phone number format";
    }
  
    if (!formData.password) {
      errors.password = "Password is required";
    }
  
    return errors;
  };
  
  