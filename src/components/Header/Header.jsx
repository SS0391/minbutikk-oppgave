import { useCart } from "../../context/CartContext/CartContext.jsx";
import { useTheme } from "../../context/ThemeContext/ThemeContext.jsx";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get("search") || "";

  const handleSearchChange = (e) => {
    const value = e.target.value;
    // user will be pushed back to home page to see the user search
    navigate("/");
    if (value) {
      setSearchParams({ search: value });
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  };

  return (
    <header className={styles.headerTop}>
      <Link to="/" className={styles.logo}>
        Awesome Nettbutikk
      </Link>
      <div className={styles.searchCont}>
        <input type="text" placeholder="Search for products..." value={searchQuery} onChange={handleSearchChange} className={styles.searchInput} />
      </div>
      <div className={styles.navCta}>
        <button onClick={toggleTheme} className={styles.themeBtn || "theme-btn"}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
      <Link to="/cart" className={styles.lintCart}>
        Shopping Cart {cartCount > 0 && <span className={styles.badge || "badge"}>({cartCount})</span>}
      </Link>
    </header>
  );
}
