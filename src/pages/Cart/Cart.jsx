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
}
