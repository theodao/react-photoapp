import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { toast } from '@gotitinc/design-system';
import AuthActions from '../../redux/actions/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Spacing, { SpacingSizes } from '../../components/styled/Spacing';
import ToastContent from '../../components/ToastContent';
import { Colors } from '../../themes';
import { error } from '../../constants';

export const Signup = ({ history, dispatchSignup, auth, app }) => {
  const { control, errors, handleSubmit, formState } = useForm({
    mode: 'onChange',
  });

  const { isValid, isSubmitted, isDirty } = formState;
  const { isLoading } = app;

  useLayoutEffect(() => {
    const { isLoggedIn } = auth;
    if (isLoggedIn) {
      history.push('/dashboard');
    }
  }, []);

  const notifySignupSuccess = (content) =>
    toast.success(() => (
      <ToastContent title="Sign up success" content={content} />
    ));

  const notifySignupFail = (content) =>
    toast.error(() => <ToastContent title="Sign up fail" content={content} />);

  const onSubmit = ({ username, password, email }) => {
    dispatchSignup({
      username,
      password,
      email,
      onSuccess: notifySignupSuccess,
      onFailure: notifySignupFail,
      history,
    });
  };

  return (
    <Flex>
      <LoginBox>
        <HeaderWrapper>Create an account</HeaderWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={Input}
            name="username"
            placeholder="Username"
            control={control}
            type="text"
            required
            error={isSubmitted && errors.username && errors.username.message}
            defaultValue=""
            rules={{
              required: error.REQUIRED,
            }}
          />
          <Spacing size={SpacingSizes.SM} />
          <Controller
            as={Input}
            name="email"
            control={control}
            placeholder="Email"
            type="text"
            required
            error={isSubmitted && errors.username && errors.email.message}
            defaultValue=""
            rules={{
              required: error.REQUIRED,
              pattern: {
                message: error.INVALID_EMAIL,
                value: /\S+@\S+\.\S+/,
              },
            }}
          />
          <Spacing size={SpacingSizes.SM} />

          <Controller
            as={Input}
            name="password"
            placeholder="Password"
            required
            control={control}
            error={isSubmitted && errors.password && errors.password.message}
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
          <Spacing size={SpacingSizes.SM} />

          <Button
            label="Sign up"
            disabled={!isDirty || !isValid}
            loading={isLoading}
            width="full"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
        <LoginWrapper
          className="u-cursorPointer"
          onClick={() => history.push('/login')}
        >
          Log In instead ?
        </LoginWrapper>
      </LoginBox>
    </Flex>
  );
};

export const mapStateToProps = (state) => ({
  auth: state.auth,
  app: state.app,
});

export const mapDispatchToProps = (dispatch) => ({
  dispatchSignup: (payload) => dispatch(AuthActions.signup(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

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
  font-size: 0.9rem;
  margin: 10px 0;
`;

const HeaderWrapper = styled(LoginWrapper)`
  font-size: 1.2rem;
`;
