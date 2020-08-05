/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { Icon, Modal, Loader } from '@gotitinc/design-system';
import _get from 'lodash/get';
import { connect } from 'react-redux';
import MainLayout from '../../Layout/MainLayout';
import Button from '../../components/Button';
import CategoryActions from '../../redux/reducer/categoryReducer';
import styles from './styles.module.scss';

const GalleryModal = ({ isOpen, onClick = () => {}, data = {}, isLoading }) => {
  if (isOpen === false) {
    return null;
  }
  return (
    <div className={styles.modalOverlay}>
      <Modal size="large" relative show onHide={onClick} centered>
        <Modal.Header closeButton onHide={onClick}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
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
          <p>{data['description']}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onClick} label="Edit" />
          <Button variant="negative" label="Delete" />
        </Modal.Footer>
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

const ItemList = ({ fetchItems, fetchItemDetail, category, match }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const openModal = (itemId, categoryId) => {
    setShowModal(true);
    fetchItemDetail({
      categoryId,
      itemId,
    });
  };
  const categoryId = _get(match, 'params.id', null);

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    fetchItems({
      offset: 0 + (currentPage - 1) * 10,
      id: categoryId,
    });
  }, [currentPage]);

  return (
    <MainLayout>
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
          isLoading={category.isFetching}
        />
      </div>
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
});

export default connect(mapStateToProps, mapDistpatchToProps)(ItemList);
