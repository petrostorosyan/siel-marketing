import { rightChoiceData } from "@/services/rightChoice/rightChoiceData";
import ChoiceItem from "./choiceItem/choiceItem";
import styles from "./rightChoice.module.scss";
import WeOffer from "./WeOffer/WeOffer";

const RightChoice = () => {
  return (
    <section className={styles.choiceContainer}>
      <h2 className={styles.sectionTitle}>Why We’re the Right Choice</h2>
      <div className={styles.choise}>
        {rightChoiceData.map((item) => {
          return <ChoiceItem key={item.id} data={item} />;
        })}
      </div>
      <WeOffer />
    </section>
  );
};

export default RightChoice;
