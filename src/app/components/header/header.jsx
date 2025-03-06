"use client";

import styles from "./header.module.scss";
import styleVariable from "../../styles/_variables.module.scss";

export default function Header({ lng }) {

  return (
    <header>
      <div id="navbar" className={styles.headerWrapper}>
        Header
      </div>
    </header>
  );
}
