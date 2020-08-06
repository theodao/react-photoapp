import React from 'react';
import { Button } from '@gotitinc/design-system';

const { Label } = Button;

export default ({
  label,
  variant = 'primary',
  width = 'auto',
  onClick = () => {},
  style = {},
  disabled = false,
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      disabled={disabled}
      width={width}
      onClick={onClick}
      {...rest}
      style={{
        ...style,
        fontSize: '0.9rem',
      }}
    >
      <Label>{label}</Label>
    </Button>
  );
};
