import { createContext, useContext } from "react";
import { useLocalStorage } from "../../hooks/localStorage";

// setup the Context object
// Default value set as undefined, to easy catch error if the context is used outside the CartProvider
const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  // if shopping cart is in the app it will get fetched. if not it will start with a empty array
  const [cart, setCart] = useLocalStorage("shopping-cart", []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      // does an item exist in the shopping cart, use .map to add a new array
      // only change quantitiy on a specific product, let the rest of the products stay unchanged
      if (itemExists) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  // a way to remove something from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    // use .map to find a product and to update it in a new array
    setCart((prevCart) => prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item)));
  };

  // a way to get the sum of all products
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return <CartContext value={{ cart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount }}>{children}</CartContext>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}
