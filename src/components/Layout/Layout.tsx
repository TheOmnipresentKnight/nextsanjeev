// Layout.tsx
import React, { ReactNode, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"; // Import the Footer component
import styles from "./Layout.module.css";
import { Row } from "react-bootstrap";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleToggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <div>
      <Header onToggleSidebarCollapse={handleToggleSidebarCollapse} />{" "}
      <div className={styles.layout}>
        <Sidebar collapsed={isSidebarCollapsed} />
        <div className={styles.content}>
          <main className={styles.main}>{children}</main>
          <Footer /> {/* Include the Footer component */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
