import React from "react";
import Analytics from "../analytics/Analytics";
import Header from "../header/Header";
import "./Dashboard.scss";
import OrdersPlatforms from "../orders-platfoms/OrdersPlatforms";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Header />
      <main className="dashboard__main">
        <Analytics />
        <OrdersPlatforms />
      </main>
    </section>
  );
};

export default Dashboard;
