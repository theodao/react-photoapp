import React from 'react';
import styles from './styles.module.scss';

export default ({ src }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        {' '}
        <img src={src} alt="#placeholder" />{' '}
      </div>
      <div className={styles.cardTitle}>Category</div>
    </div>
  );
};
