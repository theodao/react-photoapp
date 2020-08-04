/* eslint-disable dot-notation */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal } from '@gotitinc/design-system';
import { connect } from 'react-redux';
import CategoryActions from '../../redux/reducer/categoryReducer';
import CardImage from '../../components/CardImage';
import Pagination from '../../components/Pagination';
import Spacing, { SpacingSizes } from '../../components/styled/Spacing';
import Button from '../../components/Button';
import MainLayout from '../../Layout/MainLayout';
import styles from './styles.module.scss';

const ImageModal = ({ isOpen, onClick = () => {}, data = {} }) => {
  if (isOpen === false) {
    return null;
  }

  const { description, image_url: url, name } = data;

  return (
    <div className={styles.modalOverlay}>
      <Modal size="large" relative show onHide={onClick} centered>
        <Modal.Header closeButton onHide={onClick}>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="u-textCenter">
            <img
              src={url}
              className="u-maxWidthFull u-marginBottomExtraSmall"
              alt=""
            />
          </div>
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={onClick}
            label="View Category Image"
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const Dashboard = ({ category, fetchCategoryList, auth }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isFetching, categories, totalCategories } = category;
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
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
      page: 0 + (currentPage - 1) * 10,
    });
  }, [currentPage]);

  return (
    <MainLayout loading={isFetching}>
      <Center>
        <Spacing size={SpacingSizes.LG} />
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
        <Spacing size={SpacingSizes.LG} />
        <Pagination
          currentPage={currentPage}
          totalItems={totalCategories}
          onChangePageNumber={setCurrentPage}
        />
      </Center>
      <ImageModal isOpen={showModal} onClick={closeModal} data={modalData} />
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  category: state.category,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategoryList: (payload) =>
    dispatch(CategoryActions.fetchCategories(payload)),
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
