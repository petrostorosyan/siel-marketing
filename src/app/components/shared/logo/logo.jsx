import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.scss"

const Logo = ({ width, height }) => {
  return (
    <Link href={"/"} >
      <Image className={styles.logo} src={"/images/logo/logo.png"} width={width ? width : 169} height={height ? height : 86} alt="logo" />
    </Link>
  );
};

export default Logo;
