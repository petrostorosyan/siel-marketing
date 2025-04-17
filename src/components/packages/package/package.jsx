import Image from "next/image";
import styles from "./package.module.scss";

const Package = () => {
  return (
    <div className={styles.packageWrapper}>
      <div className={styles.titleAndImage}>
        <h4 className={styles.packageTitle}>Core Package</h4>
        <Image
          src={"/images/packages/bag.svg"}
          width={84}
          height={77}
          alt="bag"
        ></Image>
      </div>
      <p className={styles.packageDescription}>
        This package offers essential branding, content, marketing, and
        AI-driven solutions, ideal for businesses looking to build an online
        presence with targeted strategies.
      </p>
      <div className={styles.paymentBlock}></div>
    </div>
  );
};

export default Package;
