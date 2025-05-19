import Link from "next/link";
import styles from "./changeBlogButtons.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SocialIcons from "./socialIcons/socialIcons";

const ChangeBlogButtons = ({ prevPageName, prevPageLink, nextPageName, nextPageLink }) => {
  return (
    <div className={styles.changeBlogContainer}>
      <div className={styles.changeBlogWrapper}>
        <Link href={prevPageLink} className={styles.pageLink}>
          <button className={styles.button}>
            <KeyboardBackspaceIcon sx={{ marginRight: "15px" }} />
            Previous
          </button>
          <p className={styles.pageName}>{prevPageName}</p>
        </Link>

        <div className={styles.socialIcons}><SocialIcons /></div>
        <Link href={nextPageLink} className={styles.pageLink}>
          <button className={styles.button}>
            Next
            <KeyboardBackspaceIcon
              sx={{ transform: "rotate(180deg)", marginLeft: "15px" }}
            />
          </button>
          <p className={styles.pageName}>{nextPageName}</p>
        </Link>
      </div>
    </div>
  );
};

export default ChangeBlogButtons;
