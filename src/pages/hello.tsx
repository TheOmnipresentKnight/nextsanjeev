import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import { Container } from 'react-bootstrap';
import { createContext } from 'react';
// import styles from './hello.module.css'


const HelloPage: React.FC = () => {
 const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleToggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };


    return (
        <div>
      <Header onToggleSidebarCollapse={handleToggleSidebarCollapse} />
      <Sidebar collapsed={isSidebarCollapsed} />  
    </div>
  );
};

export default HelloPage;
