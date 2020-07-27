import React, { useState } from 'react';
import styled from 'styled-components';
import { Loader, TopMenu } from '@gotitinc/design-system';
import Button from '../components/Button';

export default ({ loading, children }) => {
  const [current, setCurrent] = useState('home');

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
              <TopMenu current={current} onSelect={setCurrent}>
                <TopMenu.Item eventKey="home">Home</TopMenu.Item>
                <TopMenu.Item eventKey="categories">
                  Add categories
                </TopMenu.Item>
                <TopMenu.Item eventKey="items">Add Items</TopMenu.Item>
                <TopMenu.Item eventKey="about">About</TopMenu.Item>
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
