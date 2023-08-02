import React from 'react';
import styles from './Icons.module.css';

export const UserProfileIcon: React.FC = () => {
  return (
    <span className={`${styles['fa-stack']} ${styles['fa-3x']}`} data-count="28" style={{ position: 'relative' }}>
      <i className={`${styles['fa']} ${styles['fa-circle']} ${styles['fa-stack-2x']}`}></i>
      <i className={`${styles['fa']} ${styles['fa-bell']} ${styles['fa-stack-1x']} ${styles['fa-inverse']}`}></i>
      <span className={`${styles['fa-stack']} ${styles['data-count']}`} data-count="28">{28}</span>
    </span>
  );
};
