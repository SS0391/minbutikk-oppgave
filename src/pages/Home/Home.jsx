import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchProducts } from "../../api/dummyApi.js";
import { useQuery } from "@tanstack/react-query";
import styles from "./Home.module.css";

export default function Home() {
  const limit = 12;

  const [page, setPage] = useState(0);

  const skip = page * limit;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", limit, skip],
    queryFn: () => fetchProducts({ limit, skip }),
  });

  if (isLoading) {
    return <div className={styles.loader}>Loading products</div>;
  }
  if (isError) {
    return <div className={styles.error.cont}>Cannot fetch products: {error.message}</div>;
  }

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Products</h1>
      <div className={styles.productsCont}>
        {data?.products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.thumbnail} alt={product.title} className={styles.productImg} />
            <h3 className={styles.productTitleCard}>{product.title}</h3>
            <p className={styles.productPrice}>{product.price}</p>
            <p className={styles.productCat}>Kategori: {product.category}</p>
            <Link to={`/products/${product.id}`} className={styles.detailLinks}>
              See more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
