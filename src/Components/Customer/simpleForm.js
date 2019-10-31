import React, { useState } from 'react';
import './styles.scss';

export const Customer = () => {
  const [customer, setCustomer] = useState({name: '', age: 0});

  const changeInput = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [fieldName]: fieldValue
    }));
  }

  return (
    <section className='customer'>
      <h1>Customer</h1>
      <input type='text' value={ customer.name } onChange={changeInput} name='name' />
      <span>Current name: { customer.name }</span>
      <input type='text' value={ customer.age } onChange={changeInput} name='age' />
      <span>Current age: { customer.age }</span>
    </section>
  )
};