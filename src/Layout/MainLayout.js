import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Loader, TopMenu } from '@gotitinc/design-system';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthActions from '../redux/reducer/authReducer';
import Button from '../components/Button';

export const MainLayout = ({
  loading,
  children,
  history,
  match,
  auth,
  dispatchLogout,
}) => {
  const [current, setCurrent] = useState(match.path || '/dashboard');
  const { isLoggedIn } = auth;

  return (
    <div>
      {loading ? (
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
                <TopMenu.Item
                  eventKey="/add-category"
                  onClick={() => history.push('/add-category')}
                >
                  Add categories
                </TopMenu.Item>
                <TopMenu.Item
                  eventKey="/add-item"
                  onClick={() => history.push('/add-item')}
                >
                  Add Items
                </TopMenu.Item>
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
            </div>
          </div>
          <div>{children}</div>
        </>
      )}
    </div>
  );
};

const MainLayoutWithRouter = withRouter(MainLayout);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
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
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
