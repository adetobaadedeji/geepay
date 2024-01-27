import React from "react";
import "./Orders.scss";
import { colsData, rowsData } from "../../utils/data";

const Orders = () => {
  const head = () => {
    let columns = Object.values(colsData).map((colName) => {
      return <th key={colName}>{colName}</th>;
    });

    return <tr>{columns}</tr>;
  };

  const body = () => {
    return rowsData.map((row, idx) => {
      let values = Object.entries(colsData).map(([colKey, colName]) => {
        return (
          <td key={colName} data-label={colName}>
            {row[colKey]}
          </td>
        );
      });

      return <tr key={idx}>{values}</tr>;
    });
  };

  return (
    <section className="orders">
      <div className="heading">
        <h4>Last Orders</h4>
        <span>See All</span>
      </div>
      <table className="orders__table">
        <thead>{head()}</thead>
        <tbody>{body()}</tbody>
      </table>
    </section>
  );
};

export default Orders;
