import React from 'react';
import { Formik, Form, useField, Field } from 'formik';
import * as Yup from 'yup';
import './styles.scss';
import { MyTextInput } from './inputs/myTextInput';
import { MyCheckbox } from './inputs/myCheckbox';
import { MySelect } from './inputs/mySelect';

export const Customer = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    acceptedTerms: false,
    jobType: ''
  };

  const customerSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    jobType: Yup.string()
      .oneOf([
        'designer',
        'developer',
        'manager'
      ], 'Invalid Job')
      .required('Required'),
  });

  const submitForm = (values) => {
    console.log(values);
  }

  return (
    <section className='customer'>
      <h1>Customer</h1>
      <Formik
        initialValues={ initialValues }
        onSubmit={ submitForm }
        validationSchema={ customerSchema }
      >
      {({errors, touched) => {
        return (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              type='text'
              placeholder='John'
            />
            <MyTextInput
              label='Last Name'
              name='lastName'
              type='text'
              placeholder='Black'
            />
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='John@gmail.com'
            />
            <MyCheckbox
              name='acceptedTerms'
            >
              I accept the terms and conditions
            </MyCheckbox>
            <MySelect label='Job Type' name='jobType'>
              <option value=''>Select a job</option>>
              <option value='designer'>Designer</option>>
              <option value='developer'>Developer</option>>
              <option value='manager'>Manager</option>>
            </MySelect>
            <button type="submit">Submit</button>
          </Form>
        )
      }}
      </Formik>
    </section>
  )
};