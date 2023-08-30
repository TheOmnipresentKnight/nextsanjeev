// pages/dashboard.tsx

import React from "react";
import styles from "./dashboard.module.css";
import "chart.js";
import SkillsRadar from "@/components/SkillsRadar/SkillsRadar";
import BarChart from "@/components/BarChart/BarChart";
import { Col, Row } from "react-bootstrap";
import Layout from "@/components/Layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      {" "}
      <div className={styles[`dashboard`]}>
        <h1 className={styles[`dashboard-heading`]}>Dashboard</h1>
        <p>{`Welcome to your dashboard. Here's some information:`}</p>

        <div className={styles[`dashboard-content`]}>
          <div className={styles[`widget1`]}>
            <SkillsRadar width="600px" height="600px" />
            <BarChart width="600px" height="600px" />
          </div>

          {/* <div className={styles.widget2}>
          <h2>Widget 2</h2>
          <p>Content for Widget 2 goes here.</p>
        </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
