'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Shop</h4>
          <ul>
            <li><Link href="/new-arrivals">New Arrivals</Link></li>
            <li><Link href="/bestsellers">Bestsellers</Link></li>
            <li><Link href="/collections">Collections</Link></li>
            <li><Link href="/sale">Sale</Link></li>
            <li><Link href="/gift-cards">Gift Cards</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Information</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/shipping-returns">Shipping & Returns</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <ul>
            <li>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                <span>+1 (555) 123-4567</span>
              </div>
            </li>
            <li>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <span>support@ecommerce.com</span>
              </div>
            </li>
            <li>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                <span>123 Main St, Anytown, USA</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} className={styles.icon} /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} className={styles.icon} /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} className={styles.icon} /></a>
            <a href="https://pinterest.com" aria-label="Pinterest"><FontAwesomeIcon icon={faPinterest} className={styles.icon} /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} className={styles.icon} /></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2025 [E-commerce Brand Name], All Rights Reserved</p>
      </div>
    </footer>
  );
}