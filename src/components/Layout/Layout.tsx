// Layout.tsx
import React, { ReactNode, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

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
      <Header onToggleSidebarCollapse={handleToggleSidebarCollapse} />
      <div className={styles.layout}>
        <Sidebar collapsed={isSidebarCollapsed} />

        <div className={styles.content}>
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
