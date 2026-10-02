import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCategories, fetchProducts } from "../../api/dummyApi.js";
import { useQuery } from "@tanstack/react-query";
import styles from "./Home.module.css";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

export default function Home() {
  const limit = 12;
  const [page, setPage] = useState(0);
  const skip = page * limit;

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  // see if active
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    setPage(0);
  }, [search, activeCategory]);

  const {
    data: productData,
    isLoading: isProductsLoading,
    isError: isProductsError,
    error: productsError,
  } = useQuery({
    queryKey: ["products", limit, skip, search, activeCategory],
    queryFn: () => fetchProducts({ limit, skip, search, categorySlug: activeCategory }),
  });

  // Fetch product data with Tanstack Query
  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const totalProducts = productData?.total || 0;
  const totalPages = Math.ceil(totalProducts / limit);

  if (isProductsLoading || isCategoriesLoading) {
    return <div className={styles.loader}>Loading products...</div>;
  }

  if (isProductsError) {
    return <div className={styles.errorCont}>Cannot fetch products: {productsError.message}</div>;
  }
  return (
    <div className={styles.homeContainer}>
      <div className={styles.catMenu}>
        <button onClick={() => setActiveCategory("")} className={activeCategory === "" ? styles.activeCategoryBtn : styles.categoryBtn}>
          All Products
        </button>
        {categories?.map((cat) => (
          <button key={cat.slug} onClick={() => setActiveCategory(cat.slug)} className={activeCategory === cat.slug ? styles.activeCategoryBtn : styles.categoryBtn}>
            {cat.name}
          </button>
        ))}
      </div>
      <h1 className={styles.homeTitle}>{search ? `Search results for "${search}"` : activeCategory ? `Category: ${activeCategory}` : "Our Products"}</h1>

      {productData?.products.length === 0 ? (
        <div className={styles.noMatch}>No products matched your criteria. Try another search!</div>
      ) : (
        <>
          <div className={styles.productsCont}>
            {productData?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className={styles.pag}>
              <button onClick={() => setPage((prev) => Math.max(0, prev - 1))} disabled={page === 0} className={styles.pageBtn}>
                &larr; Previous
              </button>
              <span className={styles.pageIndicator}>
                Page {page + 1} of {totalPages}
              </span>
              <button onClick={() => setPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev))} disabled={page + 1 >= totalPages} className={styles.pageBtn}>
                Next &rarr;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
