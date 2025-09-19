'use client';

import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchContainerRef = useRef(null);

  const handleSearchToggle = () => {
    setIsSearchVisible(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={120}
            />
          </Link>
        </div>
        <div className={styles.categoriesBar}>
          <Link
            href="/"
            className={`${styles.categoryButton} ${pathname === '/' ? styles.active : ''}`}
          >
            <span>Home</span>
          </Link>
          <Link
            href="/shop"
            className={`${styles.categoryButton} ${pathname === '/shop' ? styles.active : ''}`}
          >
            <span>Shop</span>
          </Link>
          <Link
            href="/about"
            className={`${styles.categoryButton} ${pathname === '/about' ? styles.active : ''}`}
          >
            <span>About</span>
          </Link>
          <Link
            href="/contact"
            className={`${styles.categoryButton} ${pathname === '/contact' ? styles.active : ''}`}
          >
            <span>Contact</span>
          </Link>
        </div>
        <div className={styles.userActions}>
          <div ref={searchContainerRef} className={`${styles.searchContainer} ${isSearchVisible ? styles.visible : ''}`}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.expandedSearchInput}
            />
            <button onClick={handleSearchToggle} className={styles.searchToggleButton}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size='2x'/>
            </button>
          </div>
          <Link href="/cart" className={styles.loginButton}>
            <FontAwesomeIcon icon={faCartShopping} size='2x'/>
          </Link>
          <Link href="/login" className={styles.cartButton}>
            <FontAwesomeIcon icon={faUser} size='2x'/>
          </Link>
        </div>
      </div>
    </nav>
  );
}