import { navData } from "@/app/services/navigation/navigationData";
import styles from "./navigation.module.scss";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"], weight: ["variable"] });

const Navigation = () => {
  return (
    <div className={styles.navigationWrapper}>
      {navData.map((item) => {
        return (
          <nav key={item.id} className={`${styles.navItem} ${workSans.className}`}>
            {item.name}
            <div className={styles.line}></div>
          </nav>
        );
      })}
    </div>
  );
};

export default Navigation;
