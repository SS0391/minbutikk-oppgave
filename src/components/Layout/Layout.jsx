import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.appLayout}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
}
