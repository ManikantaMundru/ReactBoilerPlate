/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styledComponents/styledButton';

function Button(props) {
  const { title, disabled, onClick, type } = props;

  const handleClick = () => {
    if (typeof onClick === 'function' && onClick) {
      onClick();
    }
  };
  return (
    <StyledButton type={type} disabled={disabled} onClick={handleClick}>
      {title}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
