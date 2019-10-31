import React from 'react';
import { Formik, Form, useField, Field } from 'formik';
import './styles.scss';

export const Customer = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '' 
  };

  const submitForm = (values) => {
    console.log(values);
  }

  const validateFieldFirstName = (values) => {
    let errors = {};

    if(!values.firstName) {
      errors.firstName = 'Required';
    }

    return errors;
  }

  const validateFieldLastName = (value) => {
    let error;

    if(!value) {
      error = 'Required';
    }

    return error;
  }

  return (
    <section className='customer'>
      <h1>Customer</h1>
      <Formik
        initialValues={ initialValues }
        onSubmit={ submitForm }
        validate={ validateFieldFirstName }
      >
      {(props) => {
        const { errors, touched, isValidating, resetForm, submitForm } = props;
        console.log(props);
        return (
          <Form>
            <span onClick={ resetForm }>Clear</span>
            <span onClick={ submitForm }>Send</span>
            <Field type="text" name="firstName" placeholder="firstName" />
            <span>{ touched.firstName && errors.firstName }</span>
            <Field type="text" name="lastName" validate={ validateFieldLastName } placeholder="lastName" />
            <span>{ touched.lastName && errors.lastName }</span>
            <Field type="email" name="email" placeholder="email" />
            <button type="submit">Submit</button>
          </Form>
        )
      }}
      </Formik>
    </section>
  )
};