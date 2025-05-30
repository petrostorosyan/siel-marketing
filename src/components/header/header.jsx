"use client";

import Link from "next/link";
import Logo from "../shared/logo/logo";
import styles from "./header.module.scss";
import Navigation from "./navigation/navigation";
import MobileMenu from "./mobileMenu/mobileMenu";
import { colors } from "../../styles/colorVariables";
import { useEffect, useState } from "react";
import useScreenSize from "@/functions/hooks/useScreenSize";

export default function Header({ lng }) {
  const { width: screenSize, height } = useScreenSize();
  const [logoSize, setLogoSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (screenSize < 600) {
      setLogoSize({ width: 130, height: 60 });
    } else {
      setLogoSize({ width: 169, height: 86 });
    }
  }, [screenSize]);

  return (
    <header>
      <div
        id="navbar"
        className={styles.headerWrapper}
        style={{ color: colors.primary }}
      >
        <div className={styles.headerContent}>
          <Logo width={logoSize.width} height={logoSize.height} />
          <Navigation />
          <Link href={"/faq"} className={styles.faqButton}>
            FAQ
          </Link>
          <div className={styles.mobileMenu}>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
