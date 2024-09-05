export const checkValidate = (name, email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!name) {
    return "Please enter your name";
  }

  if (!isEmailValid) {
    return "Please enter a valid email";
  }
  if (!isPasswordValid) {
    return "Password should contain at least 8 characters, one uppercase letter, one lowercase letter and one number.";
  }

  return null;
};
