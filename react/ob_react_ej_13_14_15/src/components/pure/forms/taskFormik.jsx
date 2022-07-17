import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskFormik = ({ add }) => {
  // let user = new User();

  const initialValues = {
    name: '',
    description: '',
    completed: false,
    level: LEVELS.NORMAL,
  }

  const registerSchema = Yup.object().shape(
    {
      name: Yup.string()
        .min(6, 'Name too short')
        .max(20, 'Name too long')
        .required('Name is required'),
      description: Yup.string()
        .min(6, 'Description too short')
        .max(20, 'Description too long')
        .required('Description is required'),
      completed: Yup.boolean()
        .required('Required'),


      // password: Yup.string()
      //   .min(8, 'Password too short')
      //   .required('Password is required'),
      // confirm: Yup.string()
      //   .when("password", {
      //     is: value => (value && value.length > 0 ? true : false),
      //     then: Yup.string().oneOf(
      //       [Yup.ref("password")],
      //       'Passwords must match!'
      //     )
      //   }).required('You must confirm the password')

    }
  )

  // const submit = (values) => {
  //   console.log('Register Task');
  // }
  return (
    <div>
      <h4>Register Task</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={add}
      >

        {({ touched, values, errors, isSubmitting, handleChange, handleBlur, }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" type="text" name="name" placeholder="Your name" />

            {/* name errors */}
            {
              errors.name && touched.name &&
              (
                <ErrorMessage name='name' component='div'></ErrorMessage>
              )
            }


            <label htmlFor="description">Description</label>
            <Field id="description" type="text" name="description" placeholder="Your description" />

            {/* Description errors */}
            {
              errors.description && touched.description &&
              (
                <ErrorMessage name='description' component='div'></ErrorMessage>
              )
            }

            <label htmlFor="level" className='sr-only'>Priority</label>
            <Field as="select" name="level">
              <option value={LEVELS.NORMAL}>NORMAL</option>
              <option value={LEVELS.URGENT}>URGENT</option>
              <option value={LEVELS.BLOCKING}>BLOCKING</option>
            </Field>

            <button type="submit">Register Task</button>

            {isSubmitting ? (<p>Sending your credentials</p>) : null}

          </Form>
        )}

      </Formik>
    </div>
  );
}

export default TaskFormik;
