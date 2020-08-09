const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 12;

const validateName = (values, errors) => {
  if (!values.name || (values.name && values.name.trim() === "")) {
    errors.name = "Name is required";
  }
};

const validateEmail = (values, errors) => {
  if (!values.email || (values.email && values.email.trim() === "")) {
    errors.email = "Email is required";
  }
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())
  ) {
    errors.email = "Invalid email address";
  }
};

const validatePassword = (values, errors) => {
  if (!values.password || (values.password && values.password.trim() === "")) {
    errors.password = "Password is required";
  }
  if (values.password && values.password.length > MAX_PASSWORD_LENGTH) {
    errors.password = `Must be ${MAX_PASSWORD_LENGTH} characters or less`;
  }
  if (values.password && values.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Must be ${MIN_PASSWORD_LENGTH} characters or more`;
  }
};

export const loginValidation = (values) => {
  const errors = {};

  validateEmail(values, errors);
  validatePassword(values, errors);

  return errors;
};

export const signupValidation = (values) => {
  const errors = {};

  validateName(values, errors);
  validateEmail(values, errors);
  validatePassword(values, errors);

  return errors;
};
