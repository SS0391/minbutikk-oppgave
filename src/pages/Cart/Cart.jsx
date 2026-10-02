import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext/CartContext.jsx";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.cartEmpty}>
        <h2>Empty Cart</h2>
        <p>Please go back to the store to find products</p>
        <Link to="/" className={styles.shopBtn}>
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1>Your cart ({cartCount})</h1>

      <div className={styles.cartSet}>
        <div className={styles.productList}>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartProduct}>
              <img src={item.thumbnail} alt={item.title} className={styles.productImg} />
              <div className={styles.productInfo}>
                <h3>{item.title}</h3>
                <p className={styles.productPrice}>${item.price}</p>
              </div>
              <div className={styles.quantityControl}>
                {/*Delete or add a product*/}
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className={styles.quanBtn}>
                  -
                </button>
                <h5 className={styles.quanNumber}>{item.quantity}</h5>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className={styles.quanBtn}>
                  +
                </button>
              </div>
              <div className={styles.totalProducts}>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn} aria-label={`Remove ${item.title}`}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
