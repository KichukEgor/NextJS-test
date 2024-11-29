import Image from "next/image";
import styles from "./Preloader.module.css";

const Preloader = () => (
  <div className={styles.loaderContainer}>
    <div className={styles.pokeball}>
      <Image
        src="/assets/images/pokeball.png"
        alt="pokeball"
        width={100}
        height={100}
        priority
      />
    </div>
  </div>
);

export default Preloader;
