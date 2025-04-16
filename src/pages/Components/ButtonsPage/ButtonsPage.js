import React from "react";
import { FiArrowRight, FiDownload, FiHeart, FiStar } from "react-icons/fi";
import "./ButtonsPage.css"; // We'll create this CSS file next

const ButtonsPage = () => {
  return (
    <div className="buttons-page">
      <header className="page-header">
        <h1>Button Components</h1>
        <p className="page-description">
          A collection of customizable button components with various styles,
          sizes, and states.
        </p>
      </header>

      <section className="button-section">
        <h2 className="section-title">Primary Buttons</h2>
        <div className="button-grid">
          <button className="btn btn-primary">Default</button>
          <button className="btn btn-primary hover">Hover</button>
          <button className="btn btn-primary active">Active</button>
          <button className="btn btn-primary focus">Focus</button>
          <button className="btn btn-primary disabled" disabled>
            Disabled
          </button>
          <button className="btn btn-primary loading">
            <span className="spinner"></span>
            Loading
          </button>
          <button className="btn btn-primary with-icon">
            <FiArrowRight className="btn-icon" />
            With Icon
          </button>
        </div>
      </section>

      <section className="button-section">
        <h2 className="section-title">Secondary Buttons</h2>
        <div className="button-grid">
          <button className="btn btn-secondary">Default</button>
          <button className="btn btn-secondary hover">Hover</button>
          <button className="btn btn-secondary active">Active</button>
          <button className="btn btn-secondary focus">Focus</button>
          <button className="btn btn-secondary disabled" disabled>
            Disabled
          </button>
          <button className="btn btn-secondary with-icon">
            <FiDownload className="btn-icon" />
            Download
          </button>
        </div>
      </section>

      <section className="button-section">
        <h2 className="section-title">Ghost Buttons</h2>
        <div className="button-grid">
          <button className="btn btn-ghost">Default</button>
          <button className="btn btn-ghost hover">Hover</button>
          <button className="btn btn-ghost active">Active</button>
          <button className="btn btn-ghost with-icon">
            <FiHeart className="btn-icon" />
            Favorite
          </button>
        </div>
      </section>

      <section className="button-section">
        <h2 className="section-title">Button Sizes</h2>
        <div className="button-grid">
          <button className="btn btn-primary sm">Small</button>
          <button className="btn btn-primary md">Medium</button>
          <button className="btn btn-primary lg">Large</button>
          <button className="btn btn-primary xl">Extra Large</button>
        </div>
      </section>

      <section className="button-section">
        <h2 className="section-title">Special Buttons</h2>
        <div className="button-grid">
          <button className="btn btn-success">
            <FiStar className="btn-icon" />
            Success
          </button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-gradient">Gradient</button>
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-pill">Pill Shape</button>
        </div>
      </section>

      <section className="usage-section">
        <h2 className="section-title">Usage</h2>
        <div className="code-example">
          <h3>Basic Button</h3>
          <pre>
            <code>
              {`<button className="btn btn-primary">
  Click Me
</button>`}
            </code>
          </pre>
        </div>

        <div className="code-example">
          <h3>Button with Icon</h3>
          <pre>
            <code>
              {`import { FiArrowRight } from "react-icons/fi";

<button className="btn btn-primary with-icon">
  <FiArrowRight className="btn-icon" />
  Continue
</button>`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default ButtonsPage;
