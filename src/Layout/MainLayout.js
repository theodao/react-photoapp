import React from 'react';
import styled from 'styled-components';
import { Loader } from '@gotitinc/design-system';

export default ({ loading, children }) => {
  return (
    <div>
      {loading ? (
        <Container>
          <Loader />
        </Container>
      ) : (
        children
      )}
    </div>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
