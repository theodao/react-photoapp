import React from 'react';
import { Form } from '@gotitinc/design-system';

const { Input, Label } = Form;

export default ({
  type,
  required,
  label = null,
  disabled,
  as = 'input',
  style = {},
  ...rest
}) => (
  <>
    {label && <Label>{label}</Label>}
    <Input
      type={type}
      required={required}
      disabled={disabled}
      as={as}
      style={{
        marginBottom: '10px',
        ...style,
      }}
      {...rest}
    />
  </>
);
