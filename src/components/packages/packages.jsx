import { packageData } from "@/services/package/packageData";
import Package from "./package/package";
import styles from "./packages.module.scss";

const Packages = () => {
  return (
    <div className={styles.packagesWrapper} id="packages">
      <div className={styles.packagesContainer}>
        {packageData.map((item) => {
          return <Package key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Packages;
