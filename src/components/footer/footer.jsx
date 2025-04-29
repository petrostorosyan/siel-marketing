import Image from "next/image";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <h4 className={styles.footerTitle}>Contact Us</h4>
        <div className={styles.iconsBox}>
          <a
            href="https://www.linkedin.com/company/sielmarketing"
            target="_blank"
          >
            <Image
              width={50}
              height={50}
              src={"/images/icons/linkedin.svg"}
              alt="Linkedin"
            />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=37495666833&text=Hello%2C+I%E2%80%99m+interested+in+learning+more+about+your+services+at+SIEL+Marketing.+Could+you+please+provide+details+on+how+your+packages+can+help+my+business+grow%3F+Thank+you%21&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Image
              width={50}
              height={50}
              src={"/images/icons/whatsapp.svg"}
              alt="Whatsapp"
            />
          </a>

          <Image
            width={50}
            height={50}
            src={"/images/icons/email.svg"}
            alt="Email"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
