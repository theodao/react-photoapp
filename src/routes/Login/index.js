import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { toast } from '@gotitinc/design-system';
import ToastContent from '../../components/ToastContent';
import AuthActions from '../../redux/reducer/authReducer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Colors, Fonts } from '../../themes';
import { error } from '../../constants';

const { spacing } = Fonts;

export const Login = ({ history, dispatchLogin, auth }) => {
  const { handleSubmit, control, errors } = useForm({
    mode: 'onSubmit',
  });

  useLayoutEffect(() => {
    const { isLoggedIn } = auth;
    if (isLoggedIn) {
      history.push('/dashboard');
    }
  }, []);

  const notifyLoginFail = (content) =>
    toast.error(() => <ToastContent title="Log in fail" content={content} />);

  const onSubmit = ({ email, password }) => {
    dispatchLogin({
      email,
      password,
      history,
      onFailure: notifyLoginFail,
    });
  };

  return (
    <Flex>
      <LoginBox>
        <LoginWrapper>Login</LoginWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={Input}
            name="email"
            control={control}
            type="text"
            required
            label="Email"
            error={errors.email && errors.email.message}
            defaultValue=""
            rules={{
              required: error.REQUIRED,
            }}
          />
          <Controller
            as={Input}
            name="password"
            label="Password"
            required
            control={control}
            error={errors.password && errors.password.message}
            rules={{
              minLength: {
                message: error.PASSWORD_VALIDATION,
                value: 6,
              },
              required: error.REQUIRED,
            }}
            type="password"
            defaultValue=""
          />
          <Button
            label="Log in"
            width="full"
            onClick={handleSubmit(onSubmit)}
            style={{
              marginBottom: spacing.small,
              marginTop: spacing.small,
            }}
          />
          <Button
            label="Sign up"
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

export const mapStateToProps = (state) => ({
  auth: state.auth,
});

export const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (payload) => dispatch(AuthActions.login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
