import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheck,
} from "react-icons/fi";
import "./FormsPage.css";

const FormsPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    remember: false,
    gender: "",
    subscription: "basic",
    comments: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.gender) newErrors.gender = "Gender is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="forms-page">
      <header className="page-header">
        <h1>Form Components</h1>
        <p className="page-description">
          Interactive form elements with validation, various input types, and
          submission states.
        </p>
      </header>

      <section className="form-section">
        <h2 className="section-title">Basic Form</h2>
        <form className="form" onSubmit={handleSubmit}>
          {submitSuccess && (
            <div className="form-success">
              <FiCheck className="success-icon" />
              Form submitted successfully!
            </div>
          )}

          <div className={`form-group ${errors.name ? "has-error" : ""}`}>
            <label htmlFor="name">Full Name</label>
            <div className="input-wrapper">
              <FiUser className="input-icon" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className={`form-group ${errors.email ? "has-error" : ""}`}>
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <FiMail className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className={`form-group ${errors.password ? "has-error" : ""}`}>
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <FiLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="form-row">
            <div className={`form-group ${errors.gender ? "has-error" : ""}`}>
              <label>Gender</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  Male
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  Female
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  Other
                </label>
              </div>
              {errors.gender && (
                <span className="error-message">{errors.gender}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="subscription">Subscription Plan</label>
              <select
                id="subscription"
                name="subscription"
                value={formData.subscription}
                onChange={handleChange}
                className="select-input"
              >
                <option value="basic">Basic</option>
                <option value="pro">Pro</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="comments">Additional Comments</label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Your comments here..."
              rows="4"
              value={formData.comments}
              onChange={handleChange}
              className="textarea-input"
            ></textarea>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-option">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              <span className="checkbox-custom"></span>
              Remember me
            </label>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span> Processing...
                </>
              ) : (
                "Submit Form"
              )}
            </button>
            <button type="button" className="reset-btn">
              Reset
            </button>
          </div>
        </form>
      </section>

      <section className="form-section">
        <h2 className="section-title">Input Types</h2>
        <div className="input-types-grid">
          <div className="form-group">
            <label>Text Input</label>
            <input
              type="text"
              placeholder="Enter text"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Email Input</label>
            <input
              type="email"
              placeholder="Enter email"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Password Input</label>
            <input
              type="password"
              placeholder="Enter password"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Number Input</label>
            <input
              type="number"
              placeholder="Enter number"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Date Input</label>
            <input type="date" className="input-field" />
          </div>

          <div className="form-group">
            <label>Time Input</label>
            <input type="time" className="input-field" />
          </div>

          <div className="form-group">
            <label>Color Picker</label>
            <input type="color" className="input-color" />
          </div>

          <div className="form-group">
            <label>Range Slider</label>
            <input type="range" min="0" max="100" className="input-range" />
          </div>

          <div className="form-group">
            <label>File Upload</label>
            <input type="file" className="input-file" />
          </div>
        </div>
      </section>

      <section className="usage-section">
        <h2 className="section-title">Usage</h2>
        <div className="code-example">
          <h3>Text Input with Icon</h3>
          <pre>
            <code>
              {`<div className="form-group">
  <label htmlFor="name">Full Name</label>
  <div className="input-wrapper">
    <FiUser className="input-icon" />
    <input
      type="text"
      id="name"
      placeholder="Enter your name"
    />
  </div>
</div>`}
            </code>
          </pre>
        </div>

        <div className="code-example">
          <h3>Radio Buttons Group</h3>
          <pre>
            <code>
              {`<div className="form-group">
  <label>Gender</label>
  <div className="radio-group">
    <label className="radio-option">
      <input type="radio" name="gender" value="male" />
      <span className="radio-custom"></span>
      Male
    </label>
    {/* Other options */}
  </div>
</div>`}
            </code>
          </pre>
        </div>

        <div className="code-example">
          <h3>Form Submission with Validation</h3>
          <pre>
            <code>
              {`const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!formData.name) newErrors.name = "Name is required";
  return newErrors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }
  // Submit form
};`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default FormsPage;
