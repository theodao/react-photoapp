import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import AuthActions from '../../redux/reducer/authReducer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Colors, Fonts } from '../../themes';

const { spacing } = Fonts;

const Login = ({ history, auth, dispatchLogin }) => {
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
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Input
          type="text"
          placeholder="Username"
          defaultValue=""
          name="username"
          // ref={register({})}
        />
        <Input
          type="password"
          placeholder="Enter password"
          defaultValue=""
          name="password"
          // ref={register({})}
        />
        <Button
          label="Log in"
          width="full"
          onClick={() => {
            dispatchLogin({
              username: 1,
              password: 2,
            });
          }}
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
        {/* </form> */}
      </LoginBox>
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
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
