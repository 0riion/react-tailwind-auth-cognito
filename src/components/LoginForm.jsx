import { Form, FormikProvider, useFormik } from "formik";
import { Link } from "react-router-dom";
import { useAwsCognito } from "../context/AWSAuthProvider";
import { useAuthMethod } from "../hooks/useAuth";

export default function LoginForm() {
  const { signIn } = useAuthMethod();
  const { auth } = useAwsCognito();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      // INFO: you can validate the user data here
      console.log('Login here (email, password)', values);
      signIn(values);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font">
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>

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

            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sign Up
            </button>
            <Link to='/sign-up' className="text-blue-700 text-xs text-gray-500 mt-3">Sign Up</Link>
          </div>
        </section>
      </Form>
    </FormikProvider>
  );
};
