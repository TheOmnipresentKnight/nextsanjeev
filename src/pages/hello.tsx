import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import { Col } from 'react-bootstrap';
import Box from '@/shared/Box';
import { Outlet } from 'react-router-dom';


const HelloPage: React.FC = (props) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleToggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    //   <div>
    //       <Header onToggleSidebarCollapse={handleToggleSidebarCollapse} />
    //           <Content />
    //           <Sidebar collapsed={isSidebarCollapsed} />  
    // </div>
 <Box className="main-wrapper">
      <Header onToggleSidebarCollapse={handleToggleSidebarCollapse}  />
      <Box className="content-box">
        <Sidebar collapsed={isSidebarCollapsed}/>
        <Box className="content-wrapper">{<Outlet />}</Box>
      </Box>
    </Box>
  );
};

export default HelloPage;

