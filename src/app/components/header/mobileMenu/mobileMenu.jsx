import styles from "./mobileMenu.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "../../shared/logo/logo";
import { usePathname } from "next/navigation";
import { navData, blogNavData } from "@/app/services/navigation/navigationData";

const MobileMenu = () => {
  const path = usePathname();
  const [navigationData, setNavigationData] = useState(navData);
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
  
    useEffect(() => {
      if (path == "/blog") {
        setNavigationData(blogNavData);
      } else {
        setNavigationData(navData);
      }
    }, [path]);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={styles.list}
    >
      <div className={styles.topNavigation}>
        <Logo width={130} height={60} />
        <div className={styles.closeIconBox}>
          <CloseRoundedIcon
            className={styles.closeIcon}
            sx={{ fontSize: "40px" }}
            onClick={() => {
              toggleDrawer("top", false)();
            }}
          />
        </div>
      </div>

      <div className={styles.navigationContainer}>
        {navigationData.map((item) => {
          return (
            <nav key={item.id} className={`${styles.navItem}`}>
               <Link href={item.link} className={styles.link}>{item.name}</Link>
            </nav>
          );
        })}
      </div>

      <div className={styles.faqButtonBox}>
        <Link href={"/faq"} className={styles.faqButton}>
          FAQ
        </Link>
      </div>

      <div className={styles.socialsBlock}>
        <div className={styles.socialsContent}>
          <div className={styles.line}></div>
          <div className={styles.socials}>
            <a href={"https://www.linkedin.com/company/sielmarketing/"} className={styles.link} target="_blank">
              Linkedin
            </a>
            <a href={"/"} className={styles.link} target="_blank">
              Email
            </a>
            <a href={"https://api.whatsapp.com/send/?phone=37495666833&text=Hello%2C+I%E2%80%99m+interested+in+learning+more+about+your+services+at+SIEL+Marketing.+Could+you+please+provide+details+on+how+your+packages+can+help+my+business+grow%3F+Thank+you%21&type=phone_number&app_absent=0"} className={styles.link} target="_blank">
              Whatsapp
            </a>
          </div>
        </div>
      </div>
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
