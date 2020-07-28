import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Loader, TopMenu } from '@gotitinc/design-system';
import { withRouter } from 'react-router-dom';
import Button from '../components/Button';

const MainLayout = ({ loading, children, history, match }) => {
  const [current, setCurrent] = useState(match.path || '/dashboard');

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
                label="Log out"
                style={{
                  margin: '10px',
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

export default withRouter(MainLayout);

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
