import styles from "./navigation.module.scss";
import { Work_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { blogNavData, navData } from "@/services/navigation/navigationData";

const workSans = Work_Sans({ subsets: ["latin"], weight: ["variable"] });

const Navigation = () => {
  const path = usePathname();
  const [navigationData, setNavigationData] = useState(navData);

  useEffect(() => {
    if (path == "/blog") {
      setNavigationData(blogNavData);
    } else {
      setNavigationData(navData);
    }
  }, [path]);

  return (
    <div className={styles.navigationWrapper}>
      {navigationData.map((item) => {
        return (
          <nav
            key={item.id}
            className={`${styles.navItem} ${workSans.className}`}
          >
            <Link href={item.link} className={styles.link}>
              {item.name}
            </Link>
            <div className={styles.line}></div>
          </nav>
        );
      })}
    </div>
  );
};

export default Navigation;
