import styles from "./sielInfo.module.scss";

const sielInfoData = [
  {
    id: 1,
    title: "Listen",
    description: "We start by understanding your needs and vision.",
  },
  {
    id: 2,
    title: "Create",
    description: "Our team develops solutions based on your feedback.",
  },
  {
    id: 3,
    title: "Refine",
    description:
      "Review the results and request revisions until you're satisfied.",
  },
];

const SielInfo = () => {
  return (
    <section className={styles.infoWrapper}>
      <div className={styles.infoContainer}>
        {sielInfoData.map((item) => {
          return (
            <div key={item.id} className={styles.infoCard}>
              <div className={styles.cardNumber}>{item.id}</div>
              <div className={styles.textBlock}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SielInfo;
