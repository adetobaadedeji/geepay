import { useState } from "react";
import "./Sidebar.scss";
import { Logo } from "../../assets";
import { sidebarData } from "../../utils/data";
import { useAppContext } from "../../context/AppContext";
import { Tooltip } from "react-tooltip";
import { useSmallScreen } from "../../hooks/useSmallScreen";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const { isSidebarOpen, setSidebarOpen } = useAppContext();
  const isSmallScreen = useSmallScreen(1024);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={handleSidebarToggle} />
      )}
      <aside
        className={`sidebar ${isSidebarOpen ? "openSidebar" : "closeSidebar"}`}
      >
        <section className="sidebar--container">
          <div className="sidebar--container__logocontainer">
            <img src={Logo} alt="Logo" />
          </div>
          <nav className="sidebar--container__nav">
            <ul>
              {sidebarData?.slice(0, 6)?.map(({ icon, title }, index) => (
                <>
                  <li
                    key={title}
                    className={selected === index ? "active" : ""}
                    onClick={() => setSelected(index)}
                    data-tooltip-id={title}
                  >
                    <img src={icon} alt={title} />
                    <span className="title">{title}</span>
                  </li>
                  {!isSmallScreen && (
                    <Tooltip
                      id={title}
                      place="right"
                      variant="dark"
                      content={title}
                      style={{ fontSize: "12px" }}
                    />
                  )}
                </>
              ))}
            </ul>
          </nav>
          <nav className="sidebar--container__nav bottom-nav">
            <ul>
              {sidebarData?.slice(6)?.map(({ icon, title }, index) => (
                <>
                  <li key={title} data-tooltip-id={title}>
                    <img src={icon} alt={title} />
                    <span className="title">{title}</span>
                  </li>
                  {!isSmallScreen && (
                    <Tooltip
                      id={title}
                      place="right"
                      variant="dark"
                      content={title}
                      style={{ fontSize: "12px" }}
                    />
                  )}
                </>
              ))}
            </ul>
          </nav>
        </section>
        <button
          onClick={handleSidebarToggle}
          aria-label="close menu"
          className="sidebar--button"
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z"
              fill="#0D062D"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
