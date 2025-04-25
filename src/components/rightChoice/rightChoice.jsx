import { rightChoiceData } from "@/services/rightChoice/rightChoiceData";
import ChoiceItem from "./choiceItem/choiceItem";
import styles from "./rightChoice.module.scss";

const RightChoice = () => {
  return (
    <section className={styles.choiceContainer}>
      <h2 className={styles.sectionTitle}>Why We’re the Right Choice</h2>
      {rightChoiceData.map((item) => {
        return <ChoiceItem key={item.id} data={item} />;
      })}
    </section>
  );
};

export default RightChoice;
