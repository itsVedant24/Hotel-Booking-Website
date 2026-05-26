import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  // Calculate password strength
  const calculatePasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    return Math.min(strength, 3); // 0 = weak, 1 = weak, 2 = medium, 3 = strong
  };

  // Get strength label
  const getStrengthLabel = (strength) => {
    if (strength === 0) return "";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Medium";
    return "Strong";
  };

  // Get strength class
  const getStrengthClass = (strength) => {
    if (strength === 1) return "strength-weak";
    if (strength === 2) return "strength-medium";
    if (strength === 3) return "strength-strong";
    return "";
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password = "Password must contain uppercase and lowercase letters";
    } else if (!/\d/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Terms validation
    if (!agreeToTerms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update password strength for password field
    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear confirm password error if passwords now match
    if (name === "confirmPassword" || name === "password") {
      if (errors.confirmPassword) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "",
        }));
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      try {
        // Register and login user
        login(formData.email);
        setSuccessMessage("Account created successfully! Redirecting...");

        // Redirect after a brief delay
        setTimeout(() => {
          navigate("/hotels");
        }, 1500);
      } catch (error) {
        setErrors({ submit: "Registration failed. Please try again." });
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create Account</h1>
          <p>Join us and start your journey today</p>
        </div>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <input
              type="text"
              name="name"
              className={`auth-input ${errors.name ? "error" : ""}`}
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.name && (
              <div className="error-message">{errors.name}</div>
            )}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              className={`auth-input ${errors.email ? "error" : ""}`}
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={`auth-input ${errors.password ? "error" : ""}`}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}

            {/* Password Strength Meter */}
            {formData.password && (
              <div className="password-strength">
                <span className="strength-label">
                  Password strength: {getStrengthLabel(passwordStrength)}
                </span>
                <div className={`strength-bars ${getStrengthClass(passwordStrength)}`}>
                  <div className={`strength-bar ${passwordStrength >= 1 ? "active" : ""}`}></div>
                  <div className={`strength-bar ${passwordStrength >= 2 ? "active" : ""}`}></div>
                  <div className={`strength-bar ${passwordStrength >= 3 ? "active" : ""}`}></div>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className={`auth-input ${errors.confirmPassword ? "error" : ""}`}
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={isLoading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={isLoading}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="agreeToTerms"
                className="auth-checkbox"
                checked={agreeToTerms}
                onChange={(e) => {
                  setAgreeToTerms(e.target.checked);
                  if (e.target.checked && errors.terms) {
                    setErrors((prev) => ({ ...prev, terms: "" }));
                  }
                }}
                disabled={isLoading}
              />
              <label htmlFor="agreeToTerms" className="checkbox-label">
                I agree to the{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                  Terms & Conditions
                </a>
              </label>
            </div>
            {errors.terms && (
              <div className="error-message">{errors.terms}</div>
            )}
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="error-message">{errors.submit}</div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading && <span className="button-spinner"></span>}
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="auth-divider">
          <span className="divider-text">Or register with</span>
        </div>

        {/* Social Registration Buttons */}
        <div className="social-buttons">
          <button
            className="social-button"
            onClick={() => alert("Google registration coming soon!")}
            disabled={isLoading}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </button>
          <button
            className="social-button"
            onClick={() => alert("GitHub registration coming soon!")}
            disabled={isLoading}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </button>
        </div>

        {/* Footer */}
        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
