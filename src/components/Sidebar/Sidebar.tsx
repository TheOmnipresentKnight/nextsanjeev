// Sidebar.tsx
import React, { createContext, useContext, useState } from 'react';
import { Nav } from 'react-bootstrap';
import styles from './Sidebar.module.css';


interface SidebarProps {
  collapsed: boolean;
}



const Sidebar: React.FC<SidebarProps> = ({collapsed}) => {

    
    
  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>

      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home" className={styles['sidebar-item']}>
          Home
        </Nav.Link>
        <Nav.Link href="/about" className={styles['sidebar-item']}>
          About
        </Nav.Link>
        <Nav.Link href="/contact" className={styles['sidebar-item']}>
          Contact
        </Nav.Link>
        <Nav.Link href="/dashboard" className={styles['sidebar-item']}>
          Dashboard
        </Nav.Link>
        <Nav.Link href="/settings" className={styles['sidebar-item']}>
          Settings
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
