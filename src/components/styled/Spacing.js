import styled from 'styled-components';

const sizeMap = {
  small: '10px',
  medium: '20px',
  large: '30px',
};

export const SpacingSizes = {
  SM: 'small',
  MD: 'medium',
  LG: 'large',
};

export default styled.div(({ size = 'md' }) => ({
  width: '100%',
  height: sizeMap[size],
}));
