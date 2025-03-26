import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/images/logo/logo.png"} width={169} height={86} alt="logo" />
    </Link>
  );
};

export default Logo;
