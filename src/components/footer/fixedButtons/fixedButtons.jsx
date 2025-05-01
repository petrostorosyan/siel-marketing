"use client";

import { useEffect, useState } from "react";
import styles from "./fixedButtons.module.scss";
import ChatBot from "@/components/chatBot/chatBot";
import Image from "next/image";

const FixedButtons = () => {
  const [toTop, setToTop] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, []);

  return (
    <div className={styles.fixedButtonsContainer}>
      {toTop && (
        <>
        <button className={styles.scrollTop} onClick={scrollTop}>
          <Image width={50} height={50} src={"/images/icons/to-top-icon.webp"} alt="to-top" />
        </button>
      <ChatBot />
        </>
        
      )}
    </div>
  );
};

export default FixedButtons;
