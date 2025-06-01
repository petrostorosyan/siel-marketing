import styles from "./privacyTextSection.module.scss";

const PrivacyTextSection = ({ data }) => {
  return (
    <div className={styles.textBlock}>
      <h4 className={styles.title}>{`${data.id}. ${data.title}`}</h4>
      {data.description && <p className={styles.text}>{data.description}</p>}
      {data.topText && <p className={styles.text}>{data.topText}</p>}
      {data.list && (
        <ul className={styles.listBox}>
          {data.list.map((item, i) => {
            return (
              <li key={i} className={styles.listItem}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
      {data.bottomText && <p className={styles.bottomText}>{data.bottomText}</p>}
    </div>
  );
};

export default PrivacyTextSection;
