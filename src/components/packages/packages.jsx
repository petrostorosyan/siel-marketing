import { packageData } from "@/services/package/packageData";
import Package from "./package/package";
import styles from "./packages.module.scss";
import PackageInfo from "./packageInfo/packageInfo";

const Packages = () => {
  return (
    <section className={styles.packagesWrapper} id="packages">
      <div className={styles.packagesContainer}>
        <div className={styles.packageBlock}>
          {packageData.map((item) => {
            return <Package key={item.id} data={item} />;
          })}
        </div>

        <PackageInfo />
      </div>
    </section>
  );
};

export default Packages;
