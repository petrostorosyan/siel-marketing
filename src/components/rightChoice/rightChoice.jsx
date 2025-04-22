import ChoiceItem from "./choiceItem/choiceItem";
import styles from "./rightChoice.module.scss";

const RightChoice = () => {
  return (
    <section className={styles.choiceContainer}>
      <h2 className={styles.sectionTitle}>Why We’re the Right Choice</h2>
      <ChoiceItem />
  </section>
  )
}

export default RightChoice;