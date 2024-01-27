import { useEffect } from "react";
import "./App.scss";
import { Dashboard, Sidebar } from "./components";
import { useAppContext } from "./context/AppContext";

function App() {
  const { isSidebarOpen, closeSidebar } = useAppContext();

  const handleResize = () => {
    const screenWidthThreshold = 1024;

    if (window.innerWidth >= screenWidthThreshold && isSidebarOpen) {
      closeSidebar();
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSidebarOpen, closeSidebar]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isSidebarOpen]);

  return (
    <section className="App">
      <Sidebar />
      <Dashboard />
    </section>
  );
}

export default App;
