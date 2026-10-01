import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../../api/dummyApi.js";
import { useCart } from "../../context/CartContext/CartContext.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";

export default function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });

  if (isLoading) return <Spinner />;

  if (isError) {
    <div className={styles.error}>Kunne ikke hente produktet: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.contGrid}>
        <div className={styles.imgWrap}>
          <img src={product.thumbnail} alt={product.title} className={styles.mainImg} />
        </div>
        <div className={styles.details}>
          <h5 className={styles.meta}>
            {product.brand} | {product.category}
          </h5>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.descript}>{product.description}</p>
        </div>
        <div className={styles.productStatus}>
          <h5 className={styles.productRating}>⭐ {product.rating} / 5</h5>
          <h5 className={styles.productInStock > 0 ? styles.inStock : styles.outOfStock}>{product.stock > 0 ? `In store (${product.stock})` : "All out"}</h5>
        </div>
        <button onClick={() => addToCart(product)} disabled={product.stock <= 0}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
