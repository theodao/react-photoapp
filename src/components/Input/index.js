import React from 'react';
import { Form } from '@gotitinc/design-system';
import { Fonts } from '../../themes';

const { spacing } = Fonts;
const { Input, Label, Feedback } = Form;

export default ({
  type,
  required,
  label = null,
  disabled,
  as = 'input',
  error = null,
  style = {},
  ...rest
}) => {
  return (
    <div>
      {label && (
        <Label
          style={{
            fontSize: '0.9rem',
          }}
        >
          {label}
          {required && <span className="error"> *</span>}
        </Label>
      )}
      <Input
        type={type}
        disabled={disabled}
        required
        isInvalid={error}
        as={as}
        style={{
          ...style,
          fontSize: '0.9rem',
        }}
        {...rest}
      />
      {error && <Feedback type="invalid">{error}</Feedback>}
    </div>
  );
};
