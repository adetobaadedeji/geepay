import React from "react";
import {
  Search,
  Calendar,
  Notification,
  Justin,
  ArrowDown,
} from "../../assets";
import { useAppContext } from "../../context/AppContext";
import "./Header.scss";

const Header = () => {
  const { isSidebarOpen, setSidebarOpen } = useAppContext();

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  function menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }

  return (
    <header className="header">
      <button onClick={handleSidebarToggle} aria-label="open menu">
        <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="#0D062D" fillRule="evenodd">
            <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"></path>
          </g>
        </svg>
      </button>
      <h1 className="header__title">Dashboard</h1>
      <div className="header__search">
        <img src={Search} alt="Search Icon" />
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
      <div className="header__date">
        <img src={Calendar} alt="Calendar Icon" />
        <p>November 15, 2023</p>
      </div>
      <div>
        <img src={Notification} alt="Notification Icon" />
      </div>
      <div className="profile">
        <div className="profile__user" onClick={menuToggle}>
          <img src={Justin} alt="Justin" />
          <div className="show">
            <p>Justin Bergson</p>
            <span>Justin@gmail.com</span>
          </div>
          <img src={ArrowDown} alt="ArrowDown" className="show"/>
        </div>
        <div className="menu">
          <div className="mobile-user">
            <img src={Justin} alt="Justin" />
            <div>
              <p>Justin Bergson</p>
              <span>Justin@gmail.com</span>
            </div>
          </div>
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
