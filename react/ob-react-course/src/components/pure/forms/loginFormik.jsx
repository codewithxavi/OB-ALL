import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  }
);





const LoginFormik = () => {

  const initialCredentials = {
    email: '',
    password: '',
  }

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialCredentials}
        //  YUP VALIDATION SCHEMA  //
        validationSchema={loginSchema}
        //  ON SUBMIT EVENT //
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // datos se quedan guardados en el local storage del navegador
          localStorage.setItem('credentials', values)
        }}
      >

        {({ touched, values, errors, isSubmitting, handleChange, handleBlur, }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
            />

            {/* Email errors */}
            {
              errors.email && touched.email &&
              (
                <ErrorMessage name='email' component='div'></ErrorMessage>
              )
            }

            <br />

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="jane@acme.com"
              type="password"
            />

            {/* Password errors */}
            {
              errors.password && touched.password &&
              (
                <ErrorMessage name='password' component='div'></ErrorMessage>
              )
            }

            <br />

            <button type="submit">Login</button>

            {isSubmitting ? (<p>Login your credentials</p>) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginFormik;
