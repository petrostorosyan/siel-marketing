import Image from "next/image";
import styles from "./serviceCard.module.scss";

const ServiceCard = ({
  title,
  listItems,
  id,
  imageSource,
  imageAlt,
  imagePositions,
}) => {
  return (
    <div className={styles.cardWrapper}>
      <p className={styles.cardTitle}>{title}</p>
      <ul className={styles.list}>
        {listItems.map((item, index) => {
          return (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          );
        })}
      </ul>

      <div
        className={styles.imageBox}
        style={{
          top: id == imagePositions[id - 1].id && imagePositions[id - 1].top,
          right:
            id == imagePositions[id - 1].id && imagePositions[id - 1].right,
        }}
      >
        <Image
          width={300}
          height={240}
          src={imageSource}
          alt={imageAlt}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
