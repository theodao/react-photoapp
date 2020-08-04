/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Icon, Modal } from '@gotitinc/design-system';
import MainLayout from '../../Layout/MainLayout';
import Button from '../../components/Button';
import styles from './styles.module.scss';

const imgUrls = [
  'https://source.unsplash.com/3Z70SDuYs5g/800x600',
  'https://source.unsplash.com/01vFmYAOqQ0/800x600',
  'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
  'https://source.unsplash.com/t20pc32VbrU/800x600',
  'https://source.unsplash.com/pHANr-CpbYM/800x600',
  'https://source.unsplash.com/3PmwYw2uErY/800x600',
  'https://source.unsplash.com/uOi3lg8fGl4/800x600',
  'https://source.unsplash.com/CwkiN6_qpDI/800x600',
  'https://source.unsplash.com/9O1oQ9SzQZQ/800x600',
  'https://source.unsplash.com/E4944K_4SvI/800x600',
  'https://source.unsplash.com/-hI5dX2ObAs/800x600',
  'https://source.unsplash.com/vZlTg_McCDo/800x600',
];

const GalleryModal = ({ isOpen, onClick = () => {}, src = '' }) => {
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
            <img
              src={src}
              className="u-maxWidthFull u-marginBottomExtraSmall"
              alt=""
            />
          </div>
          <p>Modal body text goes here.</p>
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
  return <img className={className} src={src} alt={alt} />;
};

export default () => {
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const openModal = (modalUrlInput) => {
    setShowModal(true);
    setModalUrl(modalUrlInput);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalUrl('');
  };

  return (
    <MainLayout>
      <div className={styles.containerFluid}>
        <div className={styles.row}>
          {imgUrls.map((url, index) => {
            return (
              <div className={styles.imageItem}>
                <div className={styles.galleryCard}>
                  <GalleryImage
                    className={styles.galleryThumbnail}
                    src={url}
                    alt={`Image number  ${index + 1}`}
                  />
                  <Icon
                    name="informationCircle"
                    size="medium"
                    style={{
                      cursor: 'pointer',
                    }}
                    className={styles.cardIconOpen}
                    onClick={(e) => openModal(url, e)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <GalleryModal isOpen={showModal} onClick={closeModal} src={modalUrl} />
      </div>
    </MainLayout>
  );
};
