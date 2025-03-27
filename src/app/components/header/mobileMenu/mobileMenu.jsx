import styles from "./mobileMenu.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState, useEffect, useRef } from "react";
import { navData } from "@/app/services/navigation/navigationData";
import Link from "next/link";

const MobileMenu = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={styles.list}
    >
      <div className={styles.closeIconBox}>
        <CloseRoundedIcon
          className={styles.closeIcon}
          sx={{ fontSize: "40px" }}
          onClick={() => {
            toggleDrawer("top", false)();
          }}
        />
      </div>

      <div className={styles.navigationContainer}>
        {navData.map((item) => {
          return (
            <nav key={item.id} className={`${styles.navItem}`}>
              {item.name}
            </nav>
          );
        })}
      </div>

      <Link href={"/faq"} className={styles.faqButton}>
        FAQ
      </Link>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuRoundedIcon sx={{ color: "#000000", fontSize: "40px" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileMenu;
