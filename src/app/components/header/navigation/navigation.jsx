import { navData } from "@/app/services/navigation/navigationData";
import styles from "./navigation.module.scss";

const Navigation = () => {
    return (
        <div className={styles.navigationWrapper}>
            {navData.map((item) => {
                return <nav key={item.id}>{item.name}</nav>
            })}
        </div>
        
    )
}

export default Navigation;