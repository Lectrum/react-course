import React from 'react';
import './styles.scss';
import cx from 'classnames';
import { string } from 'prop-types';

export const Button = (props) => {
  const { disabled, title = 'Click', type} = props;

  const customClassNames = cx({
    btn: true,
    disabled: disabled
  });

  return (
    <button className={ customClassNames }>{title} {type}</button>
  )
};

Button.propTypes = {
  type: string.isRequired
}