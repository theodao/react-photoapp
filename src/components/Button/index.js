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
  loading = false,
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      disabled={disabled || loading}
      width={width}
      onClick={onClick}
      {...rest}
      style={{
        ...style,
        fontSize: '0.9rem',
        opacity: loading ? 0.7 : 1,
      }}
    >
      <Label>
        {label}
        {loading ? <span>...</span> : null}
      </Label>
    </Button>
  );
};
