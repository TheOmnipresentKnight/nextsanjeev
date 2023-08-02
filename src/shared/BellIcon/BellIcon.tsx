import React from 'react';
import { FaBell } from 'react-icons/fa';
import styles from './BellIcon.module.css';

interface BellIconProps {
  notificationCount: number;
}

const BellIcon: React.FC<BellIconProps> = ({ notificationCount }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <FaBell className={styles.icon} />
      </div>
      {notificationCount > 0 && (
        <div className={styles.badge}>
          {notificationCount}
        </div>
      )}
    </div>
  );
};

export default BellIcon;
