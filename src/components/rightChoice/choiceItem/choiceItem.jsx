import Image from "next/image";
import styles from "./choiceItem.module.scss";

const ChoiceItem = () => {
  return (
    <div className={styles.choiceItemContainer}>
      <div className={styles.problem}>
        <div className={styles.iconBox}>
          <Image
            width={104}
            height={106}
            src={"/images/icons/error-icon.svg"}
            alt="problem"
            className={styles.icon}
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
        <Image
          width={57}
          height={92}
          src={"/images/icons/right-arrow.svg"}
          alt="right-arrow"
        />
      </div>
      <div className={styles.solution}>
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
          />
        </div>
      </div>
    </div>
  );
};

export default ChoiceItem;
