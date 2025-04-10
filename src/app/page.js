import AboutUs from "@/components/aboutUs/aboutUsComponent";
import styles from "./page.module.scss";
import HeroSection from "@/components/heroSection/heroSection";
import SielInfo from "@/components/sielInfo/sielInfo";
import OurServices from "@/components/ourServices/ourServices";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <SielInfo />
      <AboutUs />
      <OurServices />
    </div>
  );
}
