import * as yup from "yup";

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"])
    .required("Required"),
  acceptedTodos: yup.boolean().oneOf([true], "Please accept terms of service"),
});
