"use client";

import Logo from "../shared/logo/logo";
import styles from "./header.module.scss";
import Navigation from "./navigation/navigation";

export default function Header({ lng }) {

  return (
    <header>
      <div id="navbar" className={styles.headerWrapper} style={{color: "var(--primary-color)" }}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
