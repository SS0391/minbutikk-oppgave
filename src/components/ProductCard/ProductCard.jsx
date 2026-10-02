import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.thumbnail} alt={product.title} className={styles.img} />
      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
        <Link to={`/products/${product.id}`} className={styles.seeMoreBtn}>
          See more
        </Link>
      </div>
    </div>
  );
}
