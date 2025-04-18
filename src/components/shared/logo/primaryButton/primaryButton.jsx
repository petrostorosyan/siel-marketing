import Link from "next/link";
import styles from "./primaryButton.module.scss";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: ["variable"] });

const PrimaryButton = ({ title, color, link }) => {
  return (
    <div className={styles.buttonWrapper}>
      {link ? (
        <Link
          href={link}
          className={`${styles.button} ${lexend.className} ${
            color == "black" ? styles.blackColor : ""
          }`}
          target="_blank"
        >
          {title}
        </Link>
      ) : (
        <button
          className={`${styles.button} ${lexend.className} ${
            color == "black" ? styles.blackColor : ""
          }`}
        >
          {title}
        </button>
      )}
    </div>
  );
};

export default PrimaryButton;
