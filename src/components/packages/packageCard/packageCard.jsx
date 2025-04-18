import styles from "./packageCard.module.scss"

const PackageCard = ({ listData }) => {
  return (
    <div className={styles.cardWrapper}>
      <p className={styles.cardTitle}>
        {listData.title}
        </p>
      <ul className={styles.list}>
        {listData.list.map((item, index) => {
          return (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          );
        })}
      </ul>

      
    </div>
  )
}

export default PackageCard