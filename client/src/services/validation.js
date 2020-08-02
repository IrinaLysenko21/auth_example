const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 12;

export const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const maxLength = (value) =>
  value && value.length > MAX_PASSWORD_LENGTH
    ? `Must be ${MAX_PASSWORD_LENGTH} characters or less`
    : undefined;

export const minLength = (value) =>
  value && value.length < MIN_PASSWORD_LENGTH
    ? `Must be ${MIN_PASSWORD_LENGTH} characters or more`
    : undefined;
