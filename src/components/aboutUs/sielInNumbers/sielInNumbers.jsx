"use client";

import CountUp from "react-countup";
import styles from "./sielInNumbers.module.scss";
import { duration } from "@mui/material";

const numbersData = [
  {
    id: 1,
    count: "15",
    duration: 3,
    description: "Years of Experience",
  },
  {
    id: 2,
    count: "300",
    duration: 3,
    description: "Happy Clients",
  },
  {
    id: 3,
    count: "1000",
    duration: 2,
    description: "Projects Delivered",
  },
  {
    id: 4,
    count: "16",
    duration: 3,
    description: "Specialists on Board",
  },
];

const SielInNumbers = () => {
  return (
    <div className={styles.countWrapper}>
      {numbersData.map(({ id, count, duration, description }) => {
        return (
          <div key={id} className={styles.countBox}>
            <div className={styles.numberBox}>
              <CountUp
                separator=""
                end={count}
                duration={duration}
                enableScrollSpy
                // decimals={count % 1 !== 0 ? 1 : 0}
                className={styles.number}
              />
              <p>+</p>
            </div>

            <p className={styles.countName}>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SielInNumbers;
