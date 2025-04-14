"use client";

import styles from "./navigation.module.scss";
import { Work_Sans } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { navData } from "@/services/navigation/navigationData";

const workSans = Work_Sans({ subsets: ["latin"], weight: ["variable"] });

const Navigation = () => {
  const router = useRouter();
  const path = usePathname();

  const handleScrollToAbout = () => {
    const section = document.getElementById("about-us");

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop - 140, behavior: "smooth" });
    } else {    
      sessionStorage.setItem("scrollToId", "about-us");
      router.push("/");
    }
  };

  useEffect(() => {
    const scrollToId = sessionStorage.getItem("scrollToId");
    if (scrollToId && path === "/") {
      sessionStorage.removeItem("scrollToId");
      const el = document.getElementById(scrollToId);
      if (el) {
        setTimeout(() => {
          const offsetTop = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: offsetTop - 100, behavior: "smooth" });
        }, 300);
      }
    }
  }, [path]);

  return (
    <div className={styles.navigationWrapper}>
      {navData.map((item) => (
        <nav key={item.id} className={`${styles.navItem} ${workSans.className}`}>
          {item.scrollTo === "about-us" ? (
            <a href="#" className={styles.link} onClick={(e) => {
              e.preventDefault();
              handleScrollToAbout();
            }}>
              {item.name}
            </a>
          ) : (
            <a href={item.link} className={styles.link}>
              {item.name}
            </a>
          )}
          <div className={styles.line}></div>
        </nav>
      ))}
    </div>
  );
};

export default Navigation;
