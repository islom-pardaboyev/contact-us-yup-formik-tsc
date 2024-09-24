import * as yup from "yup";

const emailMatches = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export const contactUs = yup.object().shape({
  firstName: yup.string().required("Please Fill the Input"),
  lastName: yup.string().required("Please Fill the Input"),
  email: yup.string().email().required("Please Fill the Input").matches(emailMatches, "Please Enter a Valid Email"),
  message: yup.string().required("Please Fill the Input").min(10, "At Least 10 Letters"),
});
