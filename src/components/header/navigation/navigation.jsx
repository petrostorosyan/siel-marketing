"use client";

import styles from "./navigation.module.scss";
import { Work_Sans } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { blogNavData, navData } from "@/services/navigation/navigationData";

const workSans = Work_Sans({ subsets: ["latin"], weight: ["variable"] });

const Navigation = () => {
  const router = useRouter();
  const path = usePathname();

  const navigationData = path.startsWith("/blog") ? blogNavData : navData;

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop - 50, behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToId", id);
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
          window.scrollTo({ top: offsetTop - 50, behavior: "smooth" });
        }, 300);
      }
    }
  }, [path]);

  return (
    <div
      className={
        path.startsWith("/blog") ? styles.blogNavigation :styles.navigationWrapper
      }
    >
      {navigationData.map((item) => (
        <nav
          key={item.id}
          className={`${styles.navItem} ${workSans.className}`}
        >
          {item.scrollTo ? (
            <a
              href="#"
              className={styles.link}
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(item.scrollTo);
              }}
            >
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
