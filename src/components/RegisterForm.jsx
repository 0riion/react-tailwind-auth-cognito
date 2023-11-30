import { Form, FormikProvider, useFormik } from "formik";
import { Link } from "react-router-dom";

export default function RegisterForm() {

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      verifyPassword: '',
    },
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      console.log(values);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (

    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font">
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>

            <div className="relative mb-4">
              <label htmlFor="fullName" className="leading-7 text-sm text-gray-600">
                Full Name
              </label>

              <input
                type="text"
                id="fullName"
                name="fullName"
                {...getFieldProps('fullName')}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                {...getFieldProps('email')}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                {...getFieldProps('password')}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="verifyPassword" className="leading-7 text-sm text-gray-600">
                Verify Password
              </label>

              <input
                type="password"
                id="verifyPassword"
                name="verifyPassword"
                {...getFieldProps('verifyPassword')}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sign Up
            </button>
            <Link to='/sign-in' className="text-blue-700 text-xs text-gray-500 mt-3">Sign In</Link>
          </div>
        </section>
      </Form>
    </FormikProvider>
  );
};
