import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username must be four characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be six characters"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  tos: yup.boolean().oneOf([true], "You must agree to our terms of service"),
});
