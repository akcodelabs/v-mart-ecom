import React, { useState ,useEffect} from "react";
import styles from "./ShopPage.module.css"; // Assuming you have a CSS module for styles
import { ChevronsRight,ChevronsLeft,Heart,ShoppingCart,Share2} from 'lucide-react';
import {products} from "../lib/Products"; // Assuming products.json is in the data folder

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  
  const productsPerPage = 9; 
  // Initialize sorted products only once
  useEffect(() => {
    setSortedProducts([...products]);
}, []);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    let sorted = [...products];

    if (value === "priceLow") {
      sorted.sort((a, b) => parseFloat(a.price.replace("$","")) - parseFloat(b.price.replace("$","")));
    } else if (value === "priceHigh") {
      sorted.sort((a, b) => parseFloat(b.price.replace("$","")) - parseFloat(a.price.replace("$","")));
    }

    setSortedProducts(sorted);
    setCurrentPage(1); // reset to page 1
  };
  const toggleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles["shop-container"]}>
      <h1 className={styles["shop-title"]}>Shop</h1>
      <p className={styles["product-count"]}>
  Showing {indexOfFirst + 1}-{Math.min(indexOfLast, sortedProducts.length)} of {sortedProducts.length} products
</p>
      <div className={styles["sort-options"]}>
        <label htmlFor="sort" className={styles["sort-label"]}>Sort by:</label>
        <select value={sortOption} onChange={handleSortChange} className={styles["sort-dropdown"]}>
          <option value="">Default</option>
          <option value="priceHigh">Price (High to Low)</option>
          <option value="priceLow">Price (Low to High)</option>
        </select>
        </div>

      <div className={styles["product-grid"]}>
        {currentProducts.map((product,index) => (
          <div className={styles["product-card"]} key={product.id}>
            <div
              className={styles["wishlist-icon"]}
              onClick={() => toggleLike(product.id)}
              style={{ cursor: "pointer" }}
            >
              <Heart
                size={30}
                className={
                  likedItems[product.id]
                    ? styles.filledHeart
                    : styles.emptyHeart
                }
              />
            </div>
             <div className={styles.cart}>< ShoppingCart size={32}/></div>
             <div className={styles.share}>< Share2 size={30}/></div>
             <div className={styles["image-wrapper"]}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <label>{product.description}</label>
            <p>{product.price}</p>
            <button className={styles["add-to-cart"]}>Buy Now</button></div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}><ChevronsLeft /></button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}><ChevronsRight /></button>
      </div>
    </div>
  );
};

export default ShopPage;