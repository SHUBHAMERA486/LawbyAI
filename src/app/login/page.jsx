import React from 'react';
import styles from './page.module.css';


const Login = () => {
  return (
    <div className={styles.loginbtn}>
      <div className={styles.btn}>
        <div className={styles.starAnimation}></div>
        <div className={styles.loginsign}>
          <form action="" className={styles.form}>
            <p>
              Welcome, <span>sign or login in to continue</span>
            </p>
            <button className={styles.oauthButton}>
              <svg className={styles.icon} viewBox="0 0 24 24">
                {/* SVG Path */}
              </svg>
              Continue with Google
            </button>
            <button className={styles.oauthButton}>
              <svg className={styles.icon} viewBox="0 0 24 24">
                {/* SVG Path */}
              </svg>
              Continue with Facebook
            </button>
            <div className={styles.separator}>
              <div></div>
              <span>OR</span>
              <div></div>
            </div>
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button className={styles.oauthButton}>
              Continue
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 17 5-5-5-5"></path>
                <path d="m13 17 5-5-5-5"></path>
              </svg>
            </button>
          </form>
        </div>
        <div className={styles.containerstars}>
          {/* Apply the star animation class here */}
          <div className={styles.starAnimation}></div>
        </div>
        <div className={styles.glow}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
