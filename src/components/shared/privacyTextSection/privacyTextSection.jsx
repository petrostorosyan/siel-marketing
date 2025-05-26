import styles from "./privacyTextSection.module.scss"

const PrivacyTextSection = ({ data }) => {
  return (
    <div className={styles.textBlock}>{data.title}</div>
  )
}

export default PrivacyTextSection;