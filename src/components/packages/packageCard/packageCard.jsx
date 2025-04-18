import styles from "./packageCard.module.scss"

const PackageCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <p className={styles.cardTitle}>
        {/* {title} */} Brand Identity + Design:
        </p>
      <ul className={styles.list}>
        {/* {listItems.map((item, index) => {
          return (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          );
        })} */}
      </ul>

      
    </div>
  )
}

export default PackageCard