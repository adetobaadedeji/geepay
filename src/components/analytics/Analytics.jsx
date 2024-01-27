import React from "react";
import ChartGraph from "./ChartGraph";
import "./Analytics.scss";
import Cards from "../cards/Cards";

const Analytics = () => {
  return (
    <section className="analytics">
      <section className="analytics__left">
        <section className="analytics__left--info">
          <h2>Sales Trends</h2>
          <div className="analytics__left--sort">
            <span>Sort by:</span>
            <div className="wrapper">
              <select defaultValue="Weekly">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>
        </section>
        <section className="analytics__left--graph">
          <ChartGraph />
        </section>
      </section>
      <section className="analytics__right">
        <Cards />
      </section>
    </section>
  );
};

export default Analytics;
