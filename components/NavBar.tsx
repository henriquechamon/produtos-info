import React from "react";
import styles from "./NavBar.module.css";
// @ts-ignore
export default function NavBar({ title }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>{title}</h1>
      </div>
    </nav>
  );
}
