import React from "react";
import { FiHeart, FiShare2, FiBookmark, FiEye } from "react-icons/fi";
import "./CardsPage.css"; // We'll create this CSS file next

const CardsPage = () => {
  return (
    <div className="cards-page">
      <header className="page-header">
        <h1>Card Components</h1>
        <p className="page-description">
          Flexible card components for displaying content with multiple layout
          options and interactive elements.
        </p>
      </header>

      <section className="card-section">
        <h2 className="section-title">Basic Cards</h2>
        <div className="card-grid">
          {/* Simple Card */}
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Simple Card</h3>
              <p className="card-text">
                This is a basic card with simple content. Cards can contain
                various elements like text, images, and buttons.
              </p>
            </div>
          </div>

          {/* Card with Image */}
          <div className="card">
            <div className="card-image">
              <img
                src="https://source.unsplash.com/random/400x300?nature"
                alt="Nature"
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">Card with Image</h3>
              <p className="card-text">
                Beautiful nature landscape to demonstrate image cards.
              </p>
            </div>
          </div>

          {/* Card with Actions */}
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Card with Actions</h3>
              <p className="card-text">
                This card includes action buttons in the footer.
              </p>
            </div>
            <div className="card-actions">
              <button className="card-action-btn">
                <FiHeart className="card-icon" /> Like
              </button>
              <button className="card-action-btn">
                <FiShare2 className="card-icon" /> Share
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="card-section">
        <h2 className="section-title">Card Variations</h2>
        <div className="card-grid">
          {/* Highlight Card */}
          <div className="card card-highlight">
            <div className="card-content">
              <div className="card-badge">Featured</div>
              <h3 className="card-title">Highlight Card</h3>
              <p className="card-text">
                This card stands out with a special highlight style.
              </p>
            </div>
          </div>

          {/* Card with Header */}
          <div className="card">
            <div className="card-header">
              <img
                className="card-avatar"
                src="https://source.unsplash.com/random/100x100?portrait"
                alt="User"
              />
              <div className="card-header-text">
                <h4>Jane Doe</h4>
                <p>2 days ago</p>
              </div>
            </div>
            <div className="card-content">
              <p className="card-text">
                Cards can include headers with user information and timestamps.
              </p>
            </div>
          </div>

          {/* Card with Overlay */}
          <div className="card card-overlay">
            <div className="card-image">
              <img
                src="https://source.unsplash.com/random/400x300?city"
                alt="City"
              />
            </div>
            <div className="card-overlay-content">
              <h3 className="card-title">Overlay Card</h3>
              <p className="card-text">Text appears over the image</p>
            </div>
          </div>
        </div>
      </section>

      <section className="card-section">
        <h2 className="section-title">Card Layouts</h2>
        <div className="layout-examples">
          {/* Horizontal Card */}
          <div className="card card-horizontal">
            <div className="card-image">
              <img
                src="https://source.unsplash.com/random/200x200?food"
                alt="Food"
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">Horizontal Card</h3>
              <p className="card-text">
                This card layout displays horizontally with image on the side.
              </p>
              <div className="card-meta">
                <span>
                  <FiEye className="card-icon" /> 1.2k views
                </span>
                <span>
                  <FiBookmark className="card-icon" /> Save
                </span>
              </div>
            </div>
          </div>

          {/* Grid of Small Cards */}
          <div className="small-card-grid">
            {[1, 2, 3, 4].map((item) => (
              <div className="card card-small" key={item}>
                <div className="card-image">
                  <img
                    src={`https://source.unsplash.com/random/200x200?tech=${item}`}
                    alt={`Tech ${item}`}
                  />
                </div>
                <div className="card-content">
                  <h4 className="card-title">Product {item}</h4>
                  <p className="card-price">${(item * 99).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="usage-section">
        <h2 className="section-title">Usage</h2>
        <div className="code-example">
          <h3>Basic Card</h3>
          <pre>
            <code>
              {`<div className="card">
  <div className="card-content">
    <h3 className="card-title">Card Title</h3>
    <p className="card-text">Card content goes here</p>
  </div>
</div>`}
            </code>
          </pre>
        </div>

        <div className="code-example">
          <h3>Card with Image and Actions</h3>
          <pre>
            <code>
              {`<div className="card">
  <div className="card-image">
    <img src="/path/to/image.jpg" alt="Description" />
  </div>
  <div className="card-content">
    <h3 className="card-title">Card Title</h3>
    <p className="card-text">Card content</p>
  </div>
  <div className="card-actions">
    <button className="card-action-btn">
      <FiHeart /> Like
    </button>
  </div>
</div>`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default CardsPage;
