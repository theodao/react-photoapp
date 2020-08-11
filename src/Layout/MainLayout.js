import React from 'react';
import styled from 'styled-components';
import { Loader, TopMenu } from '@gotitinc/design-system';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthActions from '../redux/actions/auth';
import Button from '../components/Button';

export const MainLayout = ({
  loading,
  fullScreenLoading = false,
  children,
  history,
  match = {},
  auth,
  dispatchLogout,
}) => {
  const current = match.path || '/dashboard';
  const { isLoggedIn } = auth;
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {fullScreenLoading ? (
        <Container>
          <Loader />
        </Container>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                marginLeft: '10px',
              }}
            >
              <TopMenu current={current} onSelect={() => {}}>
                <TopMenu.Item
                  eventKey="/dashboard"
                  onClick={() => history.push('/dashboard')}
                >
                  Dashboard
                </TopMenu.Item>
                {isLoggedIn ? (
                  <TopMenu.Item
                    eventKey="/add-category"
                    onClick={() => history.push('/add-category')}
                  >
                    Add categories
                  </TopMenu.Item>
                ) : null}
              </TopMenu>
            </div>
            <div>
              <Button
                label={`${isLoggedIn ? 'Logout' : 'Login'}`}
                style={{
                  margin: '10px',
                }}
                onClick={() => {
                  if (isLoggedIn) {
                    dispatchLogout();
                  }
                  history.push('/login');
                }}
              />
              {!isLoggedIn ? (
                <Button
                  variant="secondary"
                  label="Sign up"
                  style={{
                    margin: '10px',
                  }}
                  onClick={() => {
                    history.push('/signup');
                  }}
                />
              ) : null}
            </div>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            {loading ? (
              <Container>
                <Loader />
              </Container>
            ) : (
              children
            )}
          </div>
        </>
      )}
    </div>
  );
};

const MainLayoutWithRouter = withRouter(MainLayout);

export const mapStateToProps = (state) => ({
  auth: state.auth,
});

export const mapDispatchToProps = (dispatch) => ({
  dispatchLogout: () => dispatch(AuthActions.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainLayoutWithRouter);

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
