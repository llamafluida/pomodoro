import React from 'react';
import styles from '../styles/Loading.module.css';

const Loading = () => {
  return (
    <div className={styles['loading-container']}>
      <h1 className={styles['loading-title']}>Cargando...</h1>
    </div>
  );
};

export default Loading;