import styles from "../styles/Home.module.css";
import React from "react";
const LoginPage = () => {
  return (
    <div>
      <div className={styles.main}>
        <h1 className={styles.title}>This is the Login Page</h1>
        <a href="/api/auth/login">
          <button>Please Login</button>
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
