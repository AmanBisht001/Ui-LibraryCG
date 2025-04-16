import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage/HomePage";
import ButtonsPage from "./pages/Components/ButtonsPage/ButtonsPage";
import CardsPage from "./pages/Components/CardsPage/CardsPage";
import FormsPage from "./pages/Components/FormsPage/FormsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onOpenSidebar={() => setSidebarOpen(true)}
        />

        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenSidebar={() => setSidebarOpen(true)} />}
            />
            <Route path="/components/buttons" element={<ButtonsPage />} />
            <Route path="/components/cards" element={<CardsPage />} />
            <Route path="/components/forms" element={<FormsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
