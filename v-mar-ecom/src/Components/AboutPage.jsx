import React from "react";
import styles from "./AboutPage.module.css"
import { Eye, ShoppingCart } from "lucide-react"; // replaced icons

const AboutPage = () => {
  return (
    <div className={styles["about-container"]}>
      {/* Card : Image + Text */}
      <div className={`${styles.card}${styles["about-card"]}`}>
        <div className={styles["about-section"]}>
          <div className={styles["about-text"]}>
            <h1>We Prefer only Organic Foods</h1>
            <p>
              Donec diam diam, mattis imperdiet est vitae, faucibus molestie
              nisi. Aliquam sed risus nec arcu rhoncus malesuada pretium non
              neque. Suspendisse eu ex ligula. Vestibulum maximus tellus metus,
              eget volutpat mi volutpat sed. Sed tempus erat at cursus
              facilisis. Maecenas laoreet leo.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <img
              src="https://t4.ftcdn.net/jpg/06/59/75/61/360_F_659756124_ncKu04fQQArRQzwxNo6kS85DBUQxoCNv.jpg"
              alt="Organic Basket"
            />
          </div>
        </div>
      </div>

      <div className={styles["stats-section"]}>
        <div className={styles["stat-box"]}>
          <h2>450+</h2>
          <p>Products</p>
        </div>
        <div className={styles["stat-box"]}>
          <h2>300+</h2>
          <p>Branches</p>
        </div>
        <div className={styles["stat-box"]}>
          <h2>40,000+</h2>
          <p>Happy Users</p>
        </div>
        <div className={styles["stat-box"]}>
          <h2>7,889+</h2>
          <p>5 Star Reviews</p>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className={styles["floating-buttons"]}>
        <button className={`${styles.btn} ${styles.demo}`}>
          <Eye size={28} />
          Demos
        </button>
        <button className={`${styles.btn} ${styles.buy}`}>
          <ShoppingCart size={30} />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
