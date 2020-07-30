import React from 'react';
import styles from './styles.module.scss';

export default ({ src, onClick = () => {} }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={styles.card}
      onClick={() => onClick()}
      role="button"
      tabIndex="0"
    >
      <div className={styles.cardImage}>
        {' '}
        <img src={src} alt="#placeholder" />{' '}
      </div>
      <div className={styles.cardTitle}>Category</div>
    </div>
  );
};
