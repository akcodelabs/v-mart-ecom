import React from "react";
import styles from "./UserHeadder.module.css"
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { UserRound } from "lucide-react";
import { ShoppingBag } from "lucide-react";

const UserHeadder = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["welcome-text"]}>Welcome to Organic Shop</div>

      <header className={styles.header}>
        <div className={styles["header__logo"]}>
          <span className={styles["logo-icon"]}>V</span>
          <span className={styles["logo-text"]}>
            ORGANIC <p>FOOD</p>
          </span>
        </div>

        <div className={styles["header__search"]}>
          <input type="text" placeholder="Search ..." />
          <button className={styles["search-button"]}>
            <Search className={styles.searchicon }size={25} />
          </button>
        </div>

        <div className={styles["header__icons"]}>
          <Heart className={styles.icon} title="Wishlist" size={30} />
          <UserRound className={styles.icon} title="Account" size={30} />
          <ShoppingBag className={styles.icon} title="Cart" size={30} />
        </div>
      </header>
    </div>
  );
};

export default UserHeadder;
