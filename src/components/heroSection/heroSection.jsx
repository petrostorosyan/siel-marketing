import styles from "./heroSection.module.scss";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.textBlock}>
          <h1 className={styles.pageTitle}>
            One package, one price — Ulimited changes.
          </h1>
          <p className={styles.description}>
            Avoid unnecessary costs and hassles of working with multiple
            freelancers.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <Image
            width={477}
            height={426}
            src={"/images/hero-section/hero-section-pic.webp"}
            alt="hero-pic"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
