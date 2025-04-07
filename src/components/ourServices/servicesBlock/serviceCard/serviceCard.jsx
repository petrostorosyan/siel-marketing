import styles from "./serviceCard.module.scss";

const ServiceCard = () => {
  return (
    <div className={styles.cardWrapper}>
        <p className={styles.cardTitle}>Title</p>
        <ul className={styles.list}>
            <li className={styles.listItem}>visual</li>
            <li className={styles.listItem}>ui?ux</li>
        </ul>
    </div>
  )
}

export default ServiceCard;