import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../Layout/MainLayout';
import Input from '../../components/Input';

export default () => {
  return (
    <MainLayout>
      <Flex>
        <LoginBox>
          <>Add Category</>
        </LoginBox>
      </Flex>
    </MainLayout>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: -999;
`;

const LoginBox = styled.div`
  border: 1px solid #eee;
  width: 450px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
`;
