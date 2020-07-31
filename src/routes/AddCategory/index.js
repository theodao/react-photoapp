import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import MainLayout from '../../Layout/MainLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Fonts } from '../../themes';
import { error } from '../../constant';
import CategoryActions, {
  CategoryTypes,
} from '../../redux/reducer/categoryReducer';

const { spacing } = Fonts;

const AddCategory = ({ dispatchAddCategory }) => {
  const { handleSubmit, errors, control } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = ({ name, description, photoUrl }) => {
    dispatchAddCategory({
      name,
      description,
    });
  };

  return (
    <MainLayout>
      <Flex>
        <LoginBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              as={Input}
              type="text"
              placeholder="Category Name"
              control={control}
              error={errors.name && errors.name.message}
              defaultValue=""
              name="name"
              rules={{
                required: error.REQUIRED,
              }}
            />
            <Controller
              as={Input}
              type="text"
              placeholder="Description"
              control={control}
              error={errors.description && errors.description.message}
              defaultValue=""
              name="description"
              rules={{
                required: error.REQUIRED,
              }}
            />
            <Controller
              as={Input}
              type="text"
              placeholder="Photo URL"
              control={control}
              error={errors.photoUrl && errors.photoUrl.message}
              defaultValue=""
              name="photoUrl"
              rules={{
                required: error.REQUIRED,
              }}
            />
            <Button
              label="Add"
              width="full"
              onClick={handleSubmit(onSubmit)}
              style={{
                marginBottom: spacing.small,
              }}
            />
          </form>
        </LoginBox>
      </Flex>
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddCategory: (payload) =>
    dispatch(CategoryActions.addCategory(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);

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
