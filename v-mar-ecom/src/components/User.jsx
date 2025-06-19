import React, { useState } from 'react';

const VmartAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '', login: '' });
  const [valid, setValid] = useState({ email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleToggle = (form) => {
    setIsLogin(form === 'login');
    setErrors({ email: '', password: '', confirmPassword: '', login: '' });
    setValid({ email: '', password: '', confirmPassword: '' });
  };

  const handleSignup = () => {
    const { name, email, password, confirmPassword } = signupData;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    const newErrors = { email: '', password: '', confirmPassword: '' };

    if (!emailPattern.test(email)) newErrors.email = 'Enter a valid email.';
    if (!passwordPattern.test(password)) newErrors.password = 'Password must include upper, lower, number & 6+ chars.';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
      localStorage.setItem("vmart_user", JSON.stringify({ name, email, password }));
      alert("Account created successfully!");
      setSignupData({ name: '', email: '', password: '', confirmPassword: '' });
      setIsLogin(true);
    }
  };

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("vmart_user"));
    if (!user || user.email !== loginData.email || user.password !== loginData.password) {
      setErrors({ ...errors, login: "Invalid email or password." });
    } else {
      setErrors({ ...errors, login: "" });
      alert("Login successful! Welcome, " + user.name);
    }
  };

  const handleForgotPassword = () => {
    const email = prompt("Enter your registered email:");
    const user = JSON.parse(localStorage.getItem("vmart_user"));

    if (!user || user.email !== email) {
      alert("No account found with this email.");
    } else {
      alert("Your password is: " + user.password);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.toggleBtns}>
        <button
          style={isLogin ? styles.activeBtn : styles.inactiveBtn}
          onClick={() => handleToggle('login')}
        >Login</button>
        <button
          style={!isLogin ? styles.activeBtn : styles.inactiveBtn}
          onClick={() => handleToggle('signup')}
        >Signup</button>
      </div>

      {isLogin ? (
        <div>
          <h2 style={styles.heading}>Login to V-Mart</h2>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />

          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              style={styles.passwordInput}
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <span style={styles.eye} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🔓" : "🔒"}
            </span>
          </div>

          <div style={styles.link}><a href="#" onClick={handleForgotPassword}>Forgot Password?</a></div>
          {errors.login && <p style={styles.error}>{errors.login}</p>}
          <button onClick={handleLogin} style={styles.button}>Login</button>
          <div style={styles.link}>Don't have an account? <a href="#" onClick={() => handleToggle('signup')}>Signup here</a></div>
        </div>
      ) : (
        <div>
          <h2 style={styles.heading}>Create V-Mart Account</h2>
          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
            value={signupData.name}
            onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={signupData.email}
            onChange={(e) => {
              const email = e.target.value;
              setSignupData({ ...signupData, email });
              const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
              if (emailPattern.test(email)) {
                setValid((prev) => ({ ...prev, email: "Valid email ✅" }));
                setErrors((prev) => ({ ...prev, email: "" }));
              } else {
                setValid((prev) => ({ ...prev, email: "" }));
              }
            }}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
          {valid.email && <p style={styles.success}>{valid.email}</p>}

          <div style={styles.passwordContainer}>
            <input
              type={showSignupPassword ? "text" : "password"}
              placeholder="Password"
              style={styles.passwordInput}
              value={signupData.password}
              onChange={(e) => {
                const password = e.target.value;
                setSignupData({ ...signupData, password });
                const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
                if (pattern.test(password)) {
                  setValid((prev) => ({ ...prev, password: "Strong password ✅" }));
                  setErrors((prev) => ({ ...prev, password: "" }));
                } else {
                  setValid((prev) => ({ ...prev, password: "" }));
                }
              }}
            />
            <span style={styles.eye} onClick={() => setShowSignupPassword(!showSignupPassword)}>
              {showSignupPassword ? "🔓" : "🔒"}
            </span>
          </div>
          {errors.password && <p style={styles.error}>{errors.password}</p>}
          {valid.password && <p style={styles.success}>{valid.password}</p>}

          <div style={styles.passwordContainer}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              style={styles.passwordInput}
              value={signupData.confirmPassword}
              onChange={(e) => {
                const confirmPassword = e.target.value;
                setSignupData({ ...signupData, confirmPassword });
                if (confirmPassword === signupData.password) {
                  setValid((prev) => ({ ...prev, confirmPassword: "Passwords match ✅" }));
                  setErrors((prev) => ({ ...prev, confirmPassword: "" }));
                } else {
                  setValid((prev) => ({ ...prev, confirmPassword: "" }));
                }
              }}
            />
            <span style={styles.eye} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? "🔓" : "🔒"}
            </span>
          </div>
          {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
          {valid.confirmPassword && <p style={styles.success}>{valid.confirmPassword}</p>}

          <button onClick={handleSignup} style={styles.button}>Signup</button>
          <div style={styles.link}>Already have an account? <a href="#" onClick={() => handleToggle('login')}>Login here</a></div>
        </div>
      )}
    </div>
  );
};

export default VmartAuth;

const styles = {
  container: {
    maxWidth: '400px',
    margin: '2rem auto',
    background: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#e91e63'
  },
  input: {
    width: '100%',
    padding: '12px',
    marginTop: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  passwordContainer: {
    position: 'relative',
    marginTop: '10px'
  },
  passwordInput: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    paddingRight: '40px'
  },
  eye: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '1.2rem'
  },
  button: {
    width: '100%',
    padding: '12px',
    marginTop: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    backgroundColor: '#e91e63',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    fontSize: '0.85rem',
    marginTop: '5px'
  },
  success: {
    color: 'green',
    fontSize: '0.85rem',
    marginTop: '5px'
  },
  toggleBtns: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  activeBtn: {
    flex: 1,
    margin: '0 5px',
    backgroundColor: '#e91e63',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px'
  },
  inactiveBtn: {
    flex: 1,
    margin: '0 5px',
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '5px',
    padding: '10px'
  },
  link: {
    fontSize: '0.9rem',
    textAlign: 'center',
    marginTop: '8px'
  }
};



