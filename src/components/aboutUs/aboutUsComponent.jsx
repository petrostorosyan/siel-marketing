import styles from "./aboutUsComponent.module.scss";
import AboutUsInfo from "./aboutUsInfo/aboutUsInfo";
import SielInNumbers from "./sielInNumbers/sielInNumbers";

const AboutUs = () => {
  return (
    <div id="about-us" className={styles.aboutUsWrapper}>
      <div className={styles.aboutUsContainer}>
        <AboutUsInfo />
        <div className={styles.countBlock}>
          <SielInNumbers />
        </div>
        <div className={styles.mobileCountBlock}>
          <SielInNumbers />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
