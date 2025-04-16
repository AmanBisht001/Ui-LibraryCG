import React from "react";
import "./GridPage.css";

const GridPage = () => {
  return (
    <div className="grid-page">
      <header className="page-header">
        <h1>Grid System</h1>
        <p className="page-description">
          A responsive grid system for creating flexible layouts
        </p>
      </header>

      <section className="grid-section">
        <h2>Basic Grid</h2>
        <div className="grid-example basic-grid">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="grid-item">
              <span>Col {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid-section">
        <h2>Responsive Grid</h2>
        <div className="grid-example responsive-grid">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="grid-item">
              <span>Item {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid-section">
        <h2>Nested Grid</h2>
        <div className="grid-example nested-grid">
          <div className="grid-item">
            <div className="nested-grid">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="nested-item">
                  <span>Nested {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="grid-item">
              <span>Item {i + 2}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GridPage;
