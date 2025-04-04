"use client";

import CountUp from "react-countup";
import styles from "./sielInNumbers.module.scss";

const numbersData = [
  {
    id: 1,
    count: "300",
    description: "Happy Clients",
  },
  {
    id: 2,
    count: "1000",
    description: "Projects Delivered",
  },
  {
    id: 3,
    count: "15",
    description: "Years of Experience",
  },
  {
    id: 4,
    count: "16",
    description: "Specialists on Board",
  },
];

const SielInNumbers = () => {
  return (
    <div className={styles.countWrapper}>
      {numbersData.map(({ id, count, description }) => {
        return (
          <div key={id} className={styles.countBox}>
            <div className={styles.numberBox}>
              <CountUp
                separator=""
                end={count}
                duration={3}
                enableScrollSpy
                // decimals={count % 1 !== 0 ? 1 : 0}
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
