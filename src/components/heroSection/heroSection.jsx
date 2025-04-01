import PrimaryButton from "../shared/logo/primaryButton/primaryButton";
import styles from "./heroSection.module.scss";
import Image from "next/image";
import { colors } from "../../styles/colorVariables";

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
          <div className={styles.buttonBox}>
            <PrimaryButton title="Get Started" color={colors.black} />
          </div>
        </div>
        <div className={styles.imageBlock}>
          <div className={styles.imageBox}>
            <Image
              width={477}
              height={426}
              src={"/images/hero-section/hero-section-pic.webp"}
              alt="hero-pic"
              className={styles.image}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
