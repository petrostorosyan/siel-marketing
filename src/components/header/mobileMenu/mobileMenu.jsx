"use client";

import styles from "./mobileMenu.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState, useEffect } from "react";
import Logo from "../../shared/logo/logo";
import { usePathname, useRouter } from "next/navigation";
import { blogNavData, navData } from "@/services/navigation/navigationData";

const MobileMenu = () => {
  const router = useRouter();
  const path = usePathname();
  const [navigationData, setNavigationData] = useState(navData);
  const [state, setState] = useState({ top: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    if (path === "/blog") {
      setNavigationData(blogNavData);
    } else {
      setNavigationData(navData);
    }
  }, [path]);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop - 140, behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToId", id);
      router.push("/");
    }
  };

  const handleLinkClick = (item) => (e) => {
    e.preventDefault();
    toggleDrawer("top", false)(); // Закрываем меню
    if (item.scrollTo) {
      handleScrollToSection(item.scrollTo);
    } else if (item.link) {
      router.push(item.link);
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" ? "auto" : 250 }}
      role="presentation"
      className={styles.list}
    >
      <div className={styles.topNavigation}>
        <Logo width={130} height={60} />
        <div className={styles.closeIconBox}>
          <CloseRoundedIcon
            className={styles.closeIcon}
            sx={{ fontSize: "35px" }}
            onClick={() => toggleDrawer("top", false)()}
          />
        </div>
      </div>

      <div className={styles.navigationContainer}>
        {navigationData.map((item) => (
          <nav key={item.id} className={styles.navItem}>
            <a href="#" className={styles.link} onClick={handleLinkClick(item)}>
              {item.name}
            </a>
          </nav>
        ))}
      </div>

      <div className={styles.faqButtonBox}>
        <a href="/faq" className={styles.faqButton}>
          FAQ
        </a>
      </div>

      <div className={styles.socialsBlock}>
        <div className={styles.socialsContent}>
          <div className={styles.line}></div>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/company/sielmarketing/" className={styles.link} target="_blank">Linkedin</a>
            <a href="/" className={styles.link} target="_blank">Email</a>
            <a
              href="https://api.whatsapp.com/send/?phone=37495666833&text=Hello%2C+I%E2%80%99m+interested+in+learning+more+about+your+services+at+SIEL+Marketing..."
              className={styles.link}
              target="_blank"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("top", true)}>
        <MenuRoundedIcon sx={{ color: "#000000", fontSize: "40px" }} />
      </Button>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        {list("top")}
      </SwipeableDrawer>
    </div>
  );
};

export default MobileMenu;
