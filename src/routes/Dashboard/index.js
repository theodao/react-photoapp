/* eslint-disable dot-notation */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, toast } from '@gotitinc/design-system';
import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import _get from 'lodash/get';
import cx from 'classnames';
import CategoryActions from '../../redux/reducer/categoryReducer';
import CardImage from '../../components/CardImage';
import ToastContent from '../../components/ToastContent';
import Empty from '../../components/Empty';
import Pagination from '../../components/Pagination';
import Spacing, { SpacingSizes } from '../../components/styled/Spacing';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { error } from '../../constants';
import { Fonts } from '../../themes';
import MainLayout from '../../Layout/MainLayout';
import styles from './styles.module.scss';

export const ImageModal = ({
  isOpen,
  onClick = () => {},
  data = {},
  history = {},
  onClickAddModel = () => {},
  isLoggedIn,
}) => {
  if (isOpen === false) {
    return null;
  }

  const { description, image_url: url, name, id } = data;

  return (
    <Modal size="large" show={isOpen} onHide={onClick} centered>
      <Modal.Header closeButton onHide={onClick}>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="u-textCenter">
          <img
            src={url}
            style={{
              height: '500px',
              borderRadius: '20px',
            }}
            className="u-maxWidthFull u-marginBottomExtraSmall"
            alt=""
          />
        </div>
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            history.push(`/category/${id}`);
          }}
          label="View Category Images"
        />
        <Button
          variant="primary"
          onClick={onClickAddModel}
          label="Add Item"
          disabled={!isLoggedIn}
        />
      </Modal.Footer>
    </Modal>
  );
};

export const AddItemModal = ({
  isOpen,
  onClick = () => {},
  data = {},
  addItem,
}) => {
  const { control, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
  });
  if (isOpen === false) {
    return null;
  }
  const { spacing } = Fonts;
  const notifyAddItemSuccess = (content) => {
    toast.success(() => (
      <ToastContent title="Add item success" content={content} />
    ));
    onClick();
  };

  const notifyAddItemFail = (content) =>
    toast.error(() => <ToastContent title="Add item fail" content={content} />);
  const onSubmit = ({ photoUrl, description }) => {
    const id = _get(data, 'id', null);
    addItem({
      photoUrl,
      description,
      id,
      onSuccess: notifyAddItemSuccess,
      onFailure: notifyAddItemFail,
    });
  };
  return (
    <Modal size="medium" show={isOpen} onHide={onClick} centered>
      <Modal.Header closeButton onHide={onClick}>
        <Modal.Title>Add Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={cx('Grid')}>
            <div className={cx('u-size3of12', styles.col3)}>Photo URL</div>
            <div className="u-size9of12">
              <Controller
                as={Input}
                type="text"
                placeholder="Photo URL"
                error={errors.photoUrl && errors.photoUrl.message}
                control={control}
                rules={{
                  required: error.REQUIRED,
                  pattern: {
                    message: error.INVALID_URL,
                    value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  },
                }}
                defaultValue=""
                name="photoUrl"
              />
            </div>
          </div>
          <Spacing size={SpacingSizes.SM} />

          <div className={cx('Grid')}>
            <div className={cx('u-size3of12', styles.col3)}>Description</div>
            <div className="u-size9of12">
              <Controller
                as={Input}
                type="text"
                placeholder="Description"
                error={errors.description && errors.description.message}
                defaultValue=""
                rules={{
                  required: error.REQUIRED,
                }}
                name="description"
                control={control}
              />
            </div>
          </div>
          <Spacing size={SpacingSizes.SM} />

          <div className={cx('Grid')}>
            <div className={cx('u-size3of12', styles.col3)}>
              <span />
            </div>
            <div className="u-size9of12">
              <Button
                label="Add"
                width="full"
                onClick={handleSubmit(onSubmit)}
                style={{
                  marginBottom: spacing.small,
                }}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export const Dashboard = ({
  category,
  fetchCategoryList,
  history,
  addItem,
  isLoggedIn,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isFetching, categories, totalCategories } = category;
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const openAddModal = () => {
    setShowAddModal(true);
  };
  const openModal = (data) => {
    setShowModal(true);
    setModalData(data);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData({});
  };

  useEffect(() => {
    fetchCategoryList({
      offset: 0 + (currentPage - 1) * 10,
    });
  }, [currentPage]);

  return (
    <MainLayout loading={isFetching}>
      <Center>
        <Spacing size={SpacingSizes.LG} />
        {categories.length === 0 ? (
          <Empty title="Category" />
        ) : (
          <GridSystem>
            {categories.map((item) => {
              return (
                <CardImage
                  src={item['image_url']}
                  title={item['name']}
                  onClick={() => openModal(item)}
                />
              );
            })}
          </GridSystem>
        )}

        <Spacing size={SpacingSizes.LG} />
        <Pagination
          currentPage={currentPage}
          totalItems={totalCategories}
          onChangePageNumber={setCurrentPage}
        />
      </Center>
      <ImageModal
        isOpen={showModal}
        onClick={closeModal}
        data={modalData}
        onClickAddModel={openAddModal}
        history={history}
        isLoggedIn={isLoggedIn}
      />
      <AddItemModal
        isOpen={showAddModal}
        onClick={closeAddModal}
        data={modalData}
        addItem={addItem}
      />
    </MainLayout>
  );
};

export const mapStateToProps = (state) => ({
  category: state.category,
  isLoggedIn: state.auth.isLoggedIn,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchCategoryList: (payload) =>
    dispatch(CategoryActions.fetchCategories(payload)),
  addItem: (payload) => dispatch(CategoryActions.addItem(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

const Center = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const GridSystem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 200px);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  max-width: 1140px;
  align-items: center;
`;
