'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const images = [
  { src: '/images/hero-banner.jpg', alt: 'Women in white dress' },
  { src: '/images/hero-banner2.jpg', alt: 'Women in purple dress' },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroContainer}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          fill
          className={`${styles.heroImage} ${index === currentImageIndex ? styles.active : ''}`}
          priority={index === currentImageIndex}
        />
      ))}
      <div className={styles.heroContent}>
        <Link href="/shop">
          <button className={styles.shopButton}>
            Shop New Arrivals
          </button>
        </Link>
      </div>
    </div>
  );
}