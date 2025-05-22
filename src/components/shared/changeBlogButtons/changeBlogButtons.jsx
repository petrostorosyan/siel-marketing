import Link from "next/link";
import styles from "./changeBlogButtons.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SocialIcons from "./socialIcons/socialIcons";

const ChangeBlogButtons = ({
  prevPageName,
  prevPageLink,
  nextPageName,
  nextPageLink,
}) => {
  return (
    <div className={styles.changeBlogContainer}>
      <div className={styles.changeBlogContent}>
        <div className={styles.changeBlogWrapper}>
          <Link href={prevPageLink} className={styles.pageLink}>
            <button className={styles.button}>
              <KeyboardBackspaceIcon className={styles.prevIcon} />
              Previous
            </button>
            <p className={styles.pageName}>{prevPageName}</p>
          </Link>

          <div className={styles.socialIcons}>
            <SocialIcons />
          </div>
          <Link href={nextPageLink} className={styles.pageLink}>
            <button className={styles.button}>
              Next
              <KeyboardBackspaceIcon
                className={styles.nextIcon}
              />
            </button>
            <p className={styles.pageName}>{nextPageName}</p>
          </Link>
        </div>
        <div className={styles.mobileIconsBox}>
          <div className={styles.mobileSocialIcons}>
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeBlogButtons;
