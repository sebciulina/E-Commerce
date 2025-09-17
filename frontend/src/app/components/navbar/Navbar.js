import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import SearchIcon from '../icons/search/Search.js';
import ShoppingCartIcon from '../icons/shoppingCart/ShoppingCart.js';

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="ClickShop Logo"
              width={150}
              height={120}
            />
          </Link>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Wyszukaj" />
          <button type="submit">
            <SearchIcon width={20} height={20} />
          </button>
        </div>
        <div className={styles.userActions}>
          <Link href="/login" className={styles.loginButton}>
            Zaloguj
          </Link>
          <Link href="/cart" className={styles.cartButton}>
            <ShoppingCartIcon width={20} height={20} />
          </Link>
        </div>
      </div>

      <div className={styles.categoriesBar}>
        <Link href="/new-arrivals" className={styles.categoryButton}>
          <span>Nowości</span>
        </Link>
        <Link href="/category/1" className={styles.categoryButton}>
          <span>Kategoria 1</span>
        </Link>
        <Link href="/category/2" className={styles.categoryButton}>
          <span>Kategoria 2</span>
        </Link>
      </div>
    </nav>
  );
}