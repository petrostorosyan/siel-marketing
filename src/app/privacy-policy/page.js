import PrivacyTextSection from "@/components/shared/privacyTextSection/privacyTextSection";
import styles from "./privacy.module.scss";
import { PrivacyPolicyData } from "../../services/privacyPolicyData";

export default function Page() {
  return (
    <div className={styles.PrivacyContainer}>
      <h1 className={styles.pageTitle}>Privacy Policy</h1>
      {PrivacyPolicyData.map((data) => {
        return (
          <PrivacyTextSection key={data.id} data={data} />
        )
      })}
    </div>
  );
}
