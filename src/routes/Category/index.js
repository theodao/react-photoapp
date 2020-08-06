/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { Icon, Modal, Loader, toast } from '@gotitinc/design-system';
import _get from 'lodash/get';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import ToastContent from '../../components/ToastContent';
import Spacing, { SpacingSizes } from '../../components/styled/Spacing';
import MainLayout from '../../Layout/MainLayout';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Empty from '../../components/Empty';
import CategoryActions from '../../redux/reducer/categoryReducer';
import { error } from '../../constants';
import { Fonts } from '../../themes';
import styles from './styles.module.scss';

const GalleryModal = ({
  isOpen,
  onClick = () => {},
  data = {},
  isLoading,
  categoryId,
  deleteItemDetail,
  fetchItems,
  onClickOpenEditModal = () => {},
}) => {
  if (isOpen === false) {
    return null;
  }
  const notifyAddItemSuccess = (content) => {
    toast.success(() => (
      <ToastContent title="Delete item success" content={content} />
    ));
    onClick();
    fetchItems({
      offset: 0,
      id: categoryId,
    });
  };

  const notifyAddItemFail = (content) =>
    toast.error(() => (
      <ToastContent title="Delete item fail" content={content} />
    ));

  return (
    <div className={styles.modalOverlay}>
      <Modal size="large" relative show onHide={onClick} centered>
        <Modal.Header closeButton onHide={onClick}></Modal.Header>
        <Modal.Body>
          <div className="u-textCenter">
            {isLoading ? (
              <Loader />
            ) : (
              <img
                src={data['image_url']}
                className="u-maxWidthFull u-marginBottomExtraSmall"
                alt=""
              />
            )}
          </div>
          <div>
            <div className={styles.titleDetail}>Description</div>
            <div>{data['description']}</div>
          </div>
          <Spacing size={SpacingSizes.SM} />
          <div>
            <div className={styles.titleDetail}>Author</div>
            <div>{_get(data, 'author.name', null)}</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={onClickOpenEditModal}
            label="Edit"
          />
          <Button
            variant="negative"
            label="Delete"
            onClick={() => {
              deleteItemDetail({
                categoryId,
                itemId: data.id,
                onSuccess: notifyAddItemSuccess,
                onFailure: notifyAddItemFail,
              });
            }}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const EditItemModal = ({
  isOpen,
  onClick = () => {},
  updateItemdetail = () => {},
  categoryId,
  fetchItemDetail = () => {},
  data = {},
}) => {
  const { control, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
  });
  if (isOpen === false) {
    return null;
  }

  const notifyEditItemSuccess = (content) => {
    toast.success(() => (
      <ToastContent title="Edit item success" content={content} />
    ));
    fetchItemDetail({
      categoryId,
      itemId: data.id,
    });
    onClick();
  };

  const notifyEditItemFail = (content) =>
    toast.error(() => (
      <ToastContent title="Edit item fail" content={content} />
    ));

  const onSubmit = ({ photoUrl, description }) => {
    updateItemdetail({
      categoryId,
      itemId: data.id,
      data: {
        description,
        image_url: photoUrl,
      },
      onSuccess: notifyEditItemSuccess,
      onFailure: notifyEditItemFail,
    });
  };
  const { spacing } = Fonts;

  return (
    <div className={styles.modalOverlay}>
      <Modal size="medium" relative show onHide={onClick} centered>
        <Modal.Header closeButton onHide={onClick}>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              as={Input}
              type="text"
              placeholder="Photo URL"
              error={errors.photoUrl && errors.photoUrl.message}
              control={control}
              rules={{
                required: error.REQUIRED,
              }}
              defaultValue={data['image_url']}
              name="photoUrl"
            />
            <Controller
              as={Input}
              type="text"
              placeholder="Description"
              error={errors.description && errors.description.message}
              defaultValue={data['description']}
              rules={{
                required: error.REQUIRED,
              }}
              name="description"
              control={control}
            />
            <Button
              label="Edit"
              width="full"
              onClick={handleSubmit(onSubmit)}
              style={{
                marginBottom: spacing.small,
              }}
            />
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const GalleryImage = ({ className, src = '', alt = '' }) => {
  return (
    <img
      className={className}
      style={{
        height: '100%',
      }}
      src={src}
      alt={alt}
    />
  );
};

export const ItemList = ({
  fetchItems,
  fetchItemDetail,
  deleteItemDetail,
  updateItemdetail,
  category,
  match,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const openModal = (itemId, categoryId) => {
    setShowModal(true);
    fetchItemDetail({
      categoryId,
      itemId,
    });
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };
  const categoryId = _get(match, 'params.id', null);

  useEffect(() => {
    fetchItems({
      offset: 0 + (currentPage - 1) * 10,
      id: categoryId,
    });
  }, [currentPage]);

  return (
    <MainLayout loading={category.isFetching}>
      {category.items.length === 0 ? (
        <Empty title="Item" />
      ) : (
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            {category.items.map((item, index) => {
              return (
                <div className={styles.imageItem}>
                  <div className={styles.galleryCard}>
                    <GalleryImage
                      className={styles.galleryThumbnail}
                      src={item['image_url']}
                      alt={`Image number  ${index + 1}`}
                    />
                    <Icon
                      name="informationCircle"
                      size="medium"
                      style={{
                        cursor: 'pointer',
                      }}
                      className={styles.cardIconOpen}
                      onClick={() => openModal(item.id, categoryId)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <GalleryModal
            isOpen={showModal}
            onClick={closeModal}
            data={category.currentItem}
            categoryId={categoryId}
            deleteItemDetail={deleteItemDetail}
            onClickOpenEditModal={openEditModal}
            isLoading={category.isFetchingItem}
            fetchItems={fetchItems}
          />
          <EditItemModal
            isOpen={showEditModal}
            onClick={closeEditModal}
            data={category.currentItem}
            fetchItemDetail={fetchItemDetail}
            categoryId={categoryId}
            updateItemdetail={updateItemdetail}
          />
        </div>
      )}
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  category: state.category,
});

const mapDistpatchToProps = (dispatch) => ({
  fetchItems: (payload) => dispatch(CategoryActions.fetchItems(payload)),
  fetchItemDetail: (payload) =>
    dispatch(CategoryActions.fetchItemDetail(payload)),
  deleteItemDetail: (payload) => dispatch(CategoryActions.deleteItem(payload)),
  updateItemdetail: (payload) => dispatch(CategoryActions.updateItem(payload)),
});

export default connect(mapStateToProps, mapDistpatchToProps)(ItemList);
