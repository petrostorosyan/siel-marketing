import Image from "next/image";
import styles from "./package.module.scss";

const Package = () => {
  return (
    <div className={styles.packageWrapper}>
        <div className={styles.titleAndImage}>
            <h4 className={styles.packageTitle}>Core Package</h4>
            <Image src={"/images/packages/bag.svg"} width={84} height={77} alt="bag"></Image>
        </div>
    </div>
  )
}

export default Package;