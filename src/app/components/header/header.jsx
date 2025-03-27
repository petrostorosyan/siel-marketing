"use client";

import Link from "next/link";
import Logo from "../shared/logo/logo";
import styles from "./header.module.scss";
import Navigation from "./navigation/navigation";
import MobileMenu from "./mobileMenu/mobileMenu";
import { colors } from "../../styles/colorVariables";

export default function Header({ lng }) {
  return (
    <header>
      <div
        id="navbar"
        className={styles.headerWrapper}
        style={{ color: colors.primary }}
      >
        <div className={styles.headerContent}>
          <Logo />
          <div className={styles.navigationBlock}>
            <Navigation />
            <Link href={"/faq"} className={styles.faqButton}>
              FAQ
            </Link>
          </div>
          <div className={styles.mobileMenu}>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
