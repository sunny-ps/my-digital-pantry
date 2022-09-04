import * as yup from "yup";

export const createAccountSchema = yup.object({
  username: yup.string().min(2).required("Please enter a username"),
  email: yup.string().email().required("Please enter a email"),
  pwd: yup.string().required("Please enter a password"),
  pwd2: yup
    .string()
    .oneOf([yup.ref("pwd"), null], "Please ensure passwords match"),
});
