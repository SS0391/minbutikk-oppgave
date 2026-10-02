import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext/CartContext.jsx";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
}
