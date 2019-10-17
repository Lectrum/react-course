import React from 'react';
import './styles.scss';
import cx from 'classnames';

export const Button = (props) => {
  const { disabled, title = 'Click'} = props;

  const customClassNames = cx({
    btn: true,
    disabled: disabled
  });

  return (
    <button className={ customClassNames }>{title}</button>
  )
};