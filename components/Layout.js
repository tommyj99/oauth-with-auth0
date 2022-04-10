import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useUser } from "@auth0/nextjs-auth0";
import LoginPage from "../login/LoginPage";

const Layout = ({ children }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <Navbar
        user={user}
        error={error}
        loading={isLoading}
        styles={styles.navbar}
      ></Navbar>
      <div>{user ? children : <LoginPage />}</div>
      <Footer styles={styles.footer}></Footer>
    </>
  );
};

export default Layout;
