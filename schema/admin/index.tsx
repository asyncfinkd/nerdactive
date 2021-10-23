import * as yup from "yup";

export const AdminSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Please enter a email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Wrong email"
    ),
  password: yup.string().trim().required("Please enter a password"),
}).required();
