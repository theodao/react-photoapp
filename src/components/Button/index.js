import React from 'react';
import { Button } from '@gotitinc/design-system';

const { Label } = Button;

export default ({
  label,
  variant = 'primary',
  width = 'auto',
  onClick = () => {},
  ...rest
}) => {
  return (
    <Button variant={variant} width={width} onClick={onClick} {...rest}>
      <Label>{label}</Label>
    </Button>
  );
};
