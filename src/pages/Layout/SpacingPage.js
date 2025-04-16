import React from "react";
import "./SpacingPage.css";

const SpacingPage = () => {
  const spacingSizes = [
    { name: "Extra Small", var: "--space-xs", value: "0.25rem" },
    { name: "Small", var: "--space-sm", value: "0.5rem" },
    { name: "Medium", var: "--space-md", value: "1rem" },
    { name: "Large", var: "--space-lg", value: "1.5rem" },
    { name: "Extra Large", var: "--space-xl", value: "2rem" },
    { name: "2X Large", var: "--space-2xl", value: "3rem" },
  ];

  return (
    <div className="spacing-page">
      <header className="page-header">
        <h1>Spacing System</h1>
        <p className="page-description">
          Consistent spacing scale for margins and padding
        </p>
      </header>

      <section className="spacing-section">
        <h2>Spacing Scale</h2>
        <div className="spacing-scale">
          {spacingSizes.map((size) => (
            <div key={size.var} className="spacing-item">
              <div
                className="spacing-visual"
                style={{ width: size.value, height: size.value }}
              ></div>
              <div className="spacing-details">
                <span className="spacing-name">{size.name}</span>
                <span className="spacing-var">{size.var}</span>
                <span className="spacing-value">{size.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="spacing-section">
        <h2>Usage Examples</h2>
        <div className="spacing-examples">
          <div className="margin-example">
            <h3>Margin Utilities</h3>
            <div className="box-container">
              <div className="box mt-sm">mt-sm</div>
              <div className="box ml-md">ml-md</div>
              <div className="box mr-lg">mr-lg</div>
              <div className="box mb-xl">mb-xl</div>
            </div>
          </div>
          <div className="padding-example">
            <h3>Padding Utilities</h3>
            <div className="box-container">
              <div className="box p-sm">p-sm</div>
              <div className="box p-md">p-md</div>
              <div className="box p-lg">p-lg</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpacingPage;
