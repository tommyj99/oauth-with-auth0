import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar styles={styles.navbar}></Navbar>
      <div>{children}</div>
      <Footer styles={styles.footer}></Footer>
    </>
  );
};

export default Layout;
