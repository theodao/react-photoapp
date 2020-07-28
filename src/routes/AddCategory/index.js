import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import MainLayout from '../../Layout/MainLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Fonts } from '../../themes';

const { spacing } = Fonts;

export default () => {
  const { register } = useForm();

  return (
    <MainLayout>
      <Flex>
        <LoginBox>
          <Input
            type="text"
            placeholder="Category Name"
            defaultValue=""
            name="name"
            // ref={register({})}
          />
          <Input
            type="text"
            placeholder="Description"
            defaultValue=""
            name="description"
            // ref={register({})}
          />
          <Input
            type="text"
            placeholder="Photo URL"
            defaultValue=""
            name="photoUrl"
            // ref={register({})}
          />
          <Button
            label="Add"
            width="full"
            // onClick={handleSubmit(onSubmit)}
            style={{
              marginBottom: spacing.small,
            }}
          />
        </LoginBox>
      </Flex>
    </MainLayout>
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
  z-index: -999;
`;

const LoginBox = styled.div`
  border: 1px solid #eee;
  width: 450px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
`;
