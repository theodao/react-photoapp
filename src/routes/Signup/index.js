import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Colors } from '../../themes';

export default ({ history }) => {
  return (
    <Flex>
      <LoginBox>
        <LoginWrapper>Create an account</LoginWrapper>
        <Input type="text" placeholder="Username" defaultValue="" />
        <Input type="text" placeholder="Email" defaultValue="" />
        <Input type="password" placeholder="Enter password" defaultValue="" />
        <Input
          type="password"
          placeholder="Re enter password"
          defaultValue=""
        />
        <Button label="Sign in" width="full" />
        <LoginWrapper
          onClick={() => history.push('/login')}
          style={{ cursor: 'pointer' }}
        >
          Login instead ?
        </LoginWrapper>
      </LoginBox>
    </Flex>
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
`;

const LoginBox = styled.div`
  border: 1px solid ${Colors.primaryBlue};
  box-shadow: 6px 6px 0 ${Colors.primaryBlue};
  width: 450px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 500;
  margin: 10px 0;
`;
