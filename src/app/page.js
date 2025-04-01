import Image from "next/image";
import styles from "./page.module.scss";
import HeroSection from "@/components/heroSection/heroSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
    </div>
  );
}
