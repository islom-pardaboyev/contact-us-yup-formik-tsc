import { useFormik } from "formik";
import { contactUs } from "./schemas";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: contactUs
  })
  return (
    <section className="flex items-center justify-center h-screen bg-primary">
      <form action="" className="w-[60vw] bg-white p-10 rounded-xl">
        <h1 className="capitalize text-3xl font-karla font-bold">contact us</h1>
        <div className="grid grid-cols-12 mt-5 gap-5">
          <label className="col-span-6 flex flex-col gap-2">
            <span className="capitalize font-normal text-primary-grey_900">
              first name
            </span>
            <input
              name="firstName"
              type="text"
              className="p-2 rounded-md outline-none border-[1.5px] border-primary-grey_900 duration-300 hover:border-primary-green_600"
            />
          </label>
          <label className="col-span-6 flex flex-col gap-2">
            <span className="capitalize font-normal text-primary-grey_900 ">
              last name
            </span>
            <input
              name="lastName"
              type="text"
              className="p-2 rounded-md outline-none border-[1.5px] border-primary-grey_900 duration-300 hover:border-primary-green_600"
            />
          </label>
          <label className="col-span-12 flex flex-col gap-2">
            <span className="capitalize font-normal text-primary-grey_900">
              email adress
            </span>
            <input
              type="text"
              className="p-2 rounded-md outline-none border-[1.5px] border-primary-grey_900 duration-300 hover:border-primary-green_600"
            />
          </label>
          <span className="capitalize font-normal text-primary-grey_900 col-span-12">
            query type
          </span>
          <label className="col-span-6 flex flex-col gap-1">
            <div className="py-2 px-5 rounded-md outline-none border-[1.5px] border-primary-grey_900 duration-300 hover:border-primary-green_600 flex items-center gap-3">
              <input value={'generalEnquiry'} name="queryType" type="radio" />
              <p className="capitalize text-primary-grey_900 font-medium">general enquiry</p>
            </div>
          </label>
          <label className="col-span-6 flex flex-col gap-1">
            <div className="py-2 px-5 rounded-md outline-none border-[1.5px] border-primary-grey_900 duration-300 hover:border-primary-green_600 flex items-center gap-3">
              <input value={'supportRequest'} name="queryType" type="radio" />
              <p className="capitalize text-primary-grey_900 font-medium">support request</p>
            </div>
          </label>
          <label className="col-span-12 flex flex-col gap-2">
            <span className="font-medium text-primary-grey_900">Message</span>
            <textarea rows={3} className="border-[1.5px] outline-none rounded-md p-2 border-primary-grey_900" />
          </label>
        </div>
      </form>
    </section>
  );
}

export default App;
