import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Colors } from '../../themes';

export default ({ history }) => {
  const { control, errors, handleSubmit } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = ({ username, password, email }) => {};

  return (
    <Flex>
      <LoginBox>
        <LoginWrapper>Create an account</LoginWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={Input}
            name="username"
            placeholder="Username"
            control={control}
            type="text"
            required
            error={errors.username && errors.username.message}
            defaultValue=""
            rules={{
              required: 'This field is required',
            }}
          />
          <Controller
            as={Input}
            name="email"
            control={control}
            placeholder="Email"
            type="text"
            required
            error={errors.username && errors.email.message}
            defaultValue=""
            rules={{
              required: 'This field is required',
            }}
          />
          <Controller
            as={Input}
            name="password"
            placeholder="Password"
            required
            control={control}
            error={errors.password && errors.password.message}
            rules={{
              minLength: {
                message: 'Password must be more than 6 characters',
                value: 6,
              },
              required: 'This field is required',
            }}
            type="password"
            defaultValue=""
          />
          <Button
            label="Sign in"
            width="full"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
        <LoginWrapper
          className="u-cursorPointer"
          onClick={() => history.push('/login')}
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
