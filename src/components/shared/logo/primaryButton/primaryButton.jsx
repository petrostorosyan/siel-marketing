import styles from "./primaryButton.module.scss";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: ["variable"] });

const PrimaryButton = ({ title, color }) => {
  return (
    <button className={`${styles.button} ${lexend.className}`} style={{color: color}}>{title}</button>
  )
}

export default PrimaryButton;