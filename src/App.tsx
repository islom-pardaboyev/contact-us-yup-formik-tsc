import { useFormik } from "formik";
import { contactUs } from "./schemas";
import { ContactUsChildren } from "./types";
import { toast } from "react-toastify";

function App() {
  const formik = useFormik<ContactUsChildren>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      queryType: "generalEnquiry",
    },
    validationSchema: contactUs,
    onSubmit: (values, action) => {
      toast.success("Message Sent");
      setTimeout(() => {
        action.resetForm();
      }, 1200);
      console.log(values);
    },
  });

  return (
    <section className="flex items-center justify-center h-screen bg-primary px-4">
      <form 
        onSubmit={formik.handleSubmit} 
        className="w-full md:w-[80vw] lg:w-[60vw] xl:w-[50vw] bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg"
      >
        <h1 className="capitalize text-2xl sm:text-3xl font-karla font-bold text-center">Contact Us</h1>
        <div className="grid grid-cols-12 mt-5 gap-4 sm:gap-5">
          {/* First Name */}
          <label className="col-span-12 sm:col-span-6 flex flex-col gap-2">
            <span className="capitalize font-normal text-primary-grey_900">First name</span>
            <input
              name="firstName"
              type="text"
              className={`border-[1.5px] outline-none rounded-md p-2 ${formik.touched.firstName && formik.errors.firstName ? "border-red-500" : 'border-primary-grey_900'}`}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500">{formik.errors.firstName}</div>
            ) : null}
          </label>

          {/* Last Name */}
          <label className="col-span-12 sm:col-span-6 flex flex-col gap-2">
            <span className="capitalize font-normal text-primary-grey_900">Last name</span>
            <input
              name="lastName"
              type="text"
              className={`border-[1.5px] outline-none rounded-md p-2 ${formik.touched.lastName && formik.errors.lastName ? "border-red-500" : 'border-primary-grey_900'}`}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500">{formik.errors.lastName}</div>
            ) : null}
          </label>

          {/* Email */}
          <label className="col-span-12 flex flex-col gap-2">
            <span className="capitalize font-normal text-primary-grey_900">Email address</span>
            <input
              name="email"
              type="email"
              className={`border-[1.5px] outline-none rounded-md p-2 ${formik.touched.email && formik.errors.email ? "border-red-500" : 'border-primary-grey_900'}`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500">{formik.errors.email}</p>
            ) : null}
          </label>

          {/* Query Type */}
          <span className="capitalize font-normal text-primary-grey_900 col-span-12">Query type</span>
          <label className="col-span-6 flex flex-col gap-1">
            <div className="py-2 px-5 rounded-md outline-none border-[1.5px] border-primary-grey_900 duration-300 hover:border-primary-green_600 flex items-center gap-3">
              <input
                value="generalEnquiry"
                name="queryType"
                type="radio"
                checked={formik.values.queryType === "generalEnquiry"}
                onChange={formik.handleChange}
              />
              <p className="capitalize text-primary-grey_900 font-medium">General enquiry</p>
            </div>
          </label>
          <label className="col-span-6 flex flex-col gap-1">
            <div className="py-2 px-5 rounded-md outline-none border-[1.5px] border-primary-grey_900 duration-300 hover:border-primary-green_600 flex items-center gap-3">
              <input
                value="supportRequest"
                name="queryType"
                type="radio"
                checked={formik.values.queryType === "supportRequest"}
                onChange={formik.handleChange}
              />
              <p className="capitalize text-primary-grey_900 font-medium">Support request</p>
            </div>
          </label>

          {/* Message */}
          <label className="col-span-12 flex flex-col gap-2">
            <span className="font-medium text-primary-grey_900">Message</span>
            <textarea
              rows={3}
              name="message"
              className={`border-[1.5px] outline-none rounded-md p-2 ${formik.touched.message && formik.errors.message ? "border-red-500" : 'border-primary-grey_900'}`}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500">{formik.errors.message}</div>
            ) : null}
          </label>
        </div>
        <button 
          type="submit" 
          className="w-full py-3 text-white bg-primary-green_600 hover:bg-primary-grey_500 duration-300 mt-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default App;