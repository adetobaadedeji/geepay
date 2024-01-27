import React from "react";
import {
  GreenArrow,
  RedArrow,
  Dashboard,
  Trend,
  Users,
  Box,
  Discount,
  Notifications,
  ArrowRight,
  Settings,
  Logout,
  OrderIcon,
  GreenGraph,
  RedGraph,
  RefundIcon,
  SalesIcon,
  IncomeIcon,
  Cooper,
  Corey,
  Jaydon,
  Marcus,
  Phillip,
  Download,
} from "../assets";

export const sidebarData = [
  {
    icon: Dashboard,
    title: "Dashboard",
  },
  {
    icon: Trend,
    title: "Trend Up",
  },
  {
    icon: Users,
    title: "Users",
  },
  {
    icon: Box,
    title: "Reports",
  },
  {
    icon: Discount,
    title: "Audit Trail",
  },
  {
    icon: Notifications,
    title: "Notifications",
  },
  {
    icon: ArrowRight,
    title: "Others",
  },
  {
    icon: Settings,
    title: "Settings",
  },
  {
    icon: Logout,
    title: "Logout",
  },
];

export const cards = [
  {
    Icon: OrderIcon,
    graph: GreenGraph,
    title: "Total Order",
    value: "350",
    background: "rgba(52, 202, 165, 0.12)",
    Arrow: GreenArrow,
    percent: "23.5%",
    color: "rgba(52, 202, 165, 1)",
  },
  {
    Icon: RefundIcon,
    graph: RedGraph,
    title: "Total Refund",
    value: "270",
    background: "rgba(237, 84, 78, 0.12)",
    Arrow: RedArrow,
    percent: "23.5%",
    color: "rgba(237, 84, 78, 1)",
  },
  {
    Icon: SalesIcon,
    graph: RedGraph,
    title: "Average Sales",
    value: "1567",
    background: "rgba(237, 84, 78, 0.12)",
    Arrow: RedArrow,
    percent: "23.5%",
    color: "rgba(237, 84, 78, 1)",
  },
  {
    Icon: IncomeIcon,
    graph: GreenGraph,
    title: "Total Income",
    value: "$350.000",
    background: "rgba(52, 202, 165, 0.12)",
    Arrow: GreenArrow,
    percent: "23.5%",
    color: "rgba(52, 202, 165, 1)",
  },
];

const details = (img, name) => {
  return (
    <div className="details">
      <div className="details__picture">
        <img src={img} alt={name} />
      </div>
      <p className="details__name">{name}</p>
    </div>
  );
};
const invoice = (name) => {
  return (
    <div className="invoice-download">
      <div className="">
        <img src={Download} alt={name} />
      </div>
      <p className=" invoice">View</p>
    </div>
  );
};

const statusFormatter = (status) => {
  return (
    <span
      className={
        status === "Paid"
          ? "status paidStatus"
          : status === "Refund"
          ? "status refundStatus"
          : ""
      }
    >
      {status}
    </span>
  );
};

export const rowsData = [
  {
    name: details(Marcus, "Marcus Bergson"),
    date: <span className="date">Nov 15, 2023</span>,
    amount: <span className="amount">$80,000</span>,
    status: statusFormatter("Paid"),
    invoice: invoice(),
  },
  {
    name: details(Jaydon, "Jaydon Vaccaro"),
    date: <span className="date">Nov 15, 2023</span>,
    amount: <span className="amount">150,000</span>,
    status: statusFormatter("Refund"),
    invoice: invoice(),
  },
  {
    name: details(Corey, "Corey Schleifer"),
    date: <span className="date">Nov 15, 2023</span>,
    amount: <span className="amount">$87,000</span>,
    status: statusFormatter("Paid"),
    invoice: invoice(),
  },
  {
    name: details(Cooper, "Cooper Press"),
    date: <span className="date">Nov 15, 2023</span>,
    amount: <span className="amount">100,000</span>,
    status: statusFormatter("Refund"),
    invoice: invoice(),
  },
  {
    name: details(Phillip, "Phillip Lubin"),
    date: <span className="date">Nov 15, 2023</span>,
    amount: <span className="amount">$78,000</span>,
    status: statusFormatter("Paid"),
    invoice: invoice(),
  },
];

export const colsData = {
  name: "Name",
  date: "Date",
  amount: "Amount",
  status: "Status",
  invoice: "Invoice",
};

export const platforms = [
  {
    name: "Book Bazaar",
    progress: "54",
    color: "purple",
    value: " $2,500,000",
    percent: "15%",
  },
  {
    name: "Artisan Aisle",
    progress: "45",
    color: "blue",
    value: "$1,800,000",
    percent: "+10%",
  },
  {
    name: "Toy Troop",
    progress: "30",
    color: "orange",
    value: "$1,200,000",
    percent: "+8%",
  },
  {
    name: "XStore",
    progress: "30",
    color: "red",
    value: "$1,000,000",
    percent: "+8%",
  },
];
