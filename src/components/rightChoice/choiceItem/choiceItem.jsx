"use client";

import Image from "next/image";
import styles from "./choiceItem.module.scss";
import { useEffect, useState } from "react";
import useScreenSize from "@/functions/hooks/useScreenSize";

const ChoiceItem = ({ data }) => {
  const [show, setShow] = useState(false);
  const { width: screenSize } = useScreenSize();

  const problem = () => {
    if (screenSize < 1170) {
      setShow(false);
    }
  };

  const solution = () => {
    if (screenSize < 1170) {
      setShow(true);
    }
  };

  useEffect(() => {
    console.log(show, "show**");
  }, [show]);

  return (
    <div
      className={`${styles.choiceItemContainer} ${
        show ? styles.showSolution : styles.showProblem
      }`}
    >
      <div className={`${styles.problem} ${styles.choiceItem}`}>
        <div className={styles.iconBox}>
          <Image
            width={104}
            height={106}
            src={"/images/icons/error-icon.svg"}
            alt="problem"
            className={styles.icon}
            onClick={problem}
          />
        </div>
        <div className={styles.textBox}>
          <p className={styles.choiseTitle}>Problem:</p>
          <p className={styles.choiseDescription}>
            Lengthy turnaround times due to coordinating multiple contractors
          </p>
        </div>
      </div>

      <div className={styles.centerBox}>
        <div className={styles.imageBox}>
          <Image
            width={57}
            height={92}
            src={"/images/icons/right-arrow.svg"}
            alt="right-arrow"
            className={styles.image}
          />
        </div>
      </div>

      <div className={`${styles.solution} ${styles.choiceItem}`}>
        <div className={styles.textBox}>
          <p className={styles.choiseTitle}>SOLUTION:</p>
          <p className={styles.choiseDescription}>
            Our agency provides quick turnaround times with centralized project
            management.
          </p>
        </div>
        <div className={styles.iconBox}>
          <Image
            width={104}
            height={106}
            src={"/images/icons/check-icon.svg"}
            alt="check-icon"
            className={styles.icon}
            onClick={solution}
          />
        </div>
      </div>
    </div>
  );
};

export default ChoiceItem;
