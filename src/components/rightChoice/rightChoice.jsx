import { rightChoiceData } from "@/services/rightChoice/rightChoiceData";
import ChoiceItem from "./choiceItem/choiceItem";
import styles from "./rightChoice.module.scss";

const RightChoice = () => {
  return (
    <section className={styles.choiceContainer}>
      <h2 className={styles.sectionTitle}>Why We’re the Right Choice</h2>
      <div className={styles.choise}>
        {rightChoiceData.map((item) => {
          return <ChoiceItem key={item.id} data={item} />;
        })}
      </div>
    </section>
  );
};

export default RightChoice;
