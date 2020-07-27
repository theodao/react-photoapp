import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Colors, Fonts } from '../../themes';

const { spacing } = Fonts;

export default ({ history }) => {
  const { handleSubmit, register } = useForm({
    mode: 'onChange',
  });

  const onSubmit = ({ username, password }) => {
    console.log(username);
  };

  return (
    <Flex>
      <LoginBox>
        <LoginWrapper>Login</LoginWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Username"
            defaultValue=""
            name="username"
            ref={register({})}
          />
          <Input
            type="password"
            placeholder="Enter password"
            defaultValue=""
            name="password"
            ref={register({})}
          />
          <Button
            label="Log in"
            width="full"
            onClick={handleSubmit(onSubmit)}
            style={{
              marginBottom: spacing.small,
            }}
          />
          <Button
            label="Sign in"
            width="full"
            onClick={() => {
              history.push('/signup');
            }}
          />
        </form>
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
  margin: ${spacing.small} 0;
`;
