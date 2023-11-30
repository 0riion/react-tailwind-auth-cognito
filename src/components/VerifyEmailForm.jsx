import { Form, FormikProvider, useFormik } from "formik";
import { useAuthMethod } from "../hooks/useAuth";

export default function VerifyEmailForm() {
  const { confirmCognitoUserSignup } = useAuthMethod();

  const formik = useFormik({
    initialValues: { code: '' },
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      // INFO: Here you can get the email/username from your state and the code
      confirmCognitoUserSignup(values)
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto py-10">
            <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Verify Email</h2>

              <div className="relative mb-4">
                <label htmlFor="code" className="leading-7 text-sm text-gray-600">
                  Code
                </label>

                <input
                  type="code"
                  id="code"
                  name="code"
                  {...getFieldProps('code')}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Verify Email
              </button>
            </div>
          </div>
        </section>
      </Form>
    </FormikProvider>
  );
};
