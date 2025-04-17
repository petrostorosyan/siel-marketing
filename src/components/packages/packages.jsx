import Package from "./package/package";
import styles from "./packages.module.scss";

const Packages = () => {
  return (
    <div className={styles.packagesWrapper} id="packages">
      <div className={styles.packagesContainer}>
        <Package />
      </div>
    </div>
  );
};

export default Packages;
