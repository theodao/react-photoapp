/* eslint-disable operator-linebreak */
import React from 'react';
import styled from 'styled-components';
import { toast } from '@gotitinc/design-system';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import cx from 'classnames';
import MainLayout from '../../Layout/MainLayout';
import Input from '../../components/Input';
import ToastContent from '../../components/ToastContent';
import Button from '../../components/Button';
import { Fonts } from '../../themes';
import { error } from '../../constants';
import CategoryActions from '../../redux/actions/category';
import styles from './styles.module.scss';

const { spacing } = Fonts;

export const AddCategory = ({ dispatchAddCategory, auth, app }) => {
  const { handleSubmit, errors, control, formState } = useForm({
    mode: 'onSubmit',
  });

  const { isSubmitted, isDirty } = formState;
  const { isLoggedIn } = auth;
  const { isLoading } = app;

  const notifySignupSuccess = (content) =>
    toast.success(() => (
      <ToastContent title="Add category success" content={content} />
    ));

  const notifySignupFail = (content) =>
    toast.error(() => (
      <ToastContent title="Add category fail" content={content} />
    ));

  const onSubmit = ({ name, description, photoUrl }) => {
    if (!isLoggedIn) {
      notifySignupFail('Please Sign in first');
    } else {
      dispatchAddCategory({
        name,
        description,
        photoUrl,
        onSuccess: notifySignupSuccess,
        onFailure: notifySignupFail,
      });
    }
  };

  return (
    <MainLayout>
      <Flex>
        <LoginBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cx('Grid', styles.row)}>
              <div className={cx('u-size3of12', styles.col3)}>
                Category Name
              </div>
              <div className="u-size9of12">
                <Controller
                  as={Input}
                  type="text"
                  placeholder="Category Name"
                  control={control}
                  error={isSubmitted && errors.name && errors.name.message}
                  defaultValue=""
                  name="name"
                  rules={{
                    required: error.REQUIRED,
                    minLength: {
                      value: 1,
                      message: error.FIELD_LENGTH,
                    },
                  }}
                />
              </div>
            </div>

            <div className={cx('Grid', styles.row)}>
              <div className={cx('u-size3of12', styles.col3)}>Description</div>
              <div className="u-size9of12">
                <Controller
                  as={Input}
                  type="text"
                  placeholder="Description"
                  control={control}
                  error={
                    isSubmitted &&
                    errors.description &&
                    errors.description.message
                  }
                  defaultValue=""
                  name="description"
                  rules={{
                    required: error.REQUIRED,
                    minLength: {
                      value: 1,
                      message: error.FIELD_LENGTH,
                    },
                    maxLength: {
                      value: 200,
                      message: error.FIELD_LENGTH,
                    },
                  }}
                />
              </div>
            </div>

            <div className={cx('Grid', styles.row)}>
              <div className={cx('u-size3of12', styles.col3)}>Photo URL</div>
              <div className="u-size9of12">
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
                    minLength: {
                      value: 1,
                      message: error.FIELD_LENGTH,
                    },
                    maxLength: {
                      value: 200,
                      message: error.FIELD_LENGTH,
                    },
                    pattern: {
                      message: error.INVALID_URL,
                      value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                    },
                  }}
                />
              </div>
            </div>

            <div className="Grid">
              <div className={cx('u-size3of12', styles.col3)}>
                <span />
              </div>
              <div className="u-size9of12">
                <Button
                  label="Add"
                  loading={isLoading}
                  disabled={!isDirty}
                  width="full"
                  onClick={handleSubmit(onSubmit)}
                  style={{
                    marginBottom: spacing.small,
                  }}
                />
              </div>
            </div>
          </form>
        </LoginBox>
      </Flex>
    </MainLayout>
  );
};

export const mapStateToProps = (state) => ({
  auth: state.auth,
  app: state.app,
});

export const mapDispatchToProps = (dispatch) => ({
  dispatchAddCategory: (payload) =>
    dispatch(CategoryActions.addCategory(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginBox = styled.div`
  border: 1px solid #eee;
  max-width: 600px;
  margin: 20px auto;
  padding: 30px;
  flex: 0 0 70%;
  display: block;
  background: #fff;
  border-radius: 2px;
`;
