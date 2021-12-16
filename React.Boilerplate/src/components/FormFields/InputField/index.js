/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledInputField from './styledComponents/styledInputField';

function InputField(props) {
  const {
    input,
    type,
    placeholder,
    disabled = false,
    autoComplete = 'on',
    rows = 1,
  } = props;

  return (
    <div>
      <label htmlFor={input ? input.name : 'test'}>
        <StyledInputField
          {...input}
          type={type}
          placeholder={placeholder}
          label={placeholder}
          rows={rows}
          autoComplete={autoComplete || 'off'}
          disabled={disabled}
        />
      </label>
    </div>
  );
}

InputField.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  rows: PropTypes.number,
};

export default InputField;
