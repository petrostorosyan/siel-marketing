import styles from "./serviceCard.module.scss";

const ServiceCard = ({ title, listItems }) => {
  return (
    <div className={styles.cardWrapper}>
      <p className={styles.cardTitle}>{title}</p>
      <ul className={styles.list}>
        {listItems.map((item, index) => {
          return (
            <li key={index} className={styles.listItem}>{item}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default ServiceCard;
