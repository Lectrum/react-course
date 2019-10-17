import React from 'react';
import './styles.scss';
import cx from 'classnames';

export const Button = ({ disabled, title }) => {
  const customClassNames = cx({
    btn: true,
    disabled: disabled
  });

  return (
    <button className={ customClassNames }>{title}</button>
  )
};