import Image from "next/image";
import styles from "./aboutUsComponent.module.scss";
import AboutUsInfo from "./aboutUsInfo/aboutUsInfo";
import SielInNumbers from "./sielInNumbers/sielInNumbers";

const AboutUs = () => {
  return (
    <section id="about-us" className={styles.aboutUsWrapper}>
      <div className={styles.aboutUsContainer}>
        <AboutUsInfo />
        <div className={styles.countBlock}>
          <SielInNumbers />
        </div>
        <div className={styles.mobileCountBlock}>
          <SielInNumbers />
        </div>
      </div>
      <div className={styles.leftDecor}>
        <Image
          width={225}
          height={362}
          src={"/images/decors/about-us-left-decor.svg"}
          alt="left-decor"
          className={styles.decor}
        />
      </div>

      <div className={styles.rightDecor}>
        <Image
          width={225}
          height={362}
          src={"/images/decors/about-us-right-decor.svg"}
          alt="left-decor"
          className={styles.decor}
        />
      </div>
    </section>
  );
};

export default AboutUs;
