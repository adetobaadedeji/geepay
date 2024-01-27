import React from "react";
import "./OrdersPlatforms.scss";
import Orders from "../orders/Orders";
import Platforms from "../platforms/Platforms";

const OrdersPlatforms = () => {
  return (
    <section className="orders-platforms">
      <section className="orders-platforms__left">
        <Orders />
      </section>
      <section className="orders-platforms__right">
        <Platforms />
      </section>
    </section>
  );
};

export default OrdersPlatforms;
