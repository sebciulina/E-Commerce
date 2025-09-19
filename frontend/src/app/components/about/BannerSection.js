import Image from 'next/image';
import Link from 'next/link';
import styles from './BannerSection.module.css'

export default function BannerSection() {
    return (
        <div className={styles.imageContainer}>
            <Image
                src="/images/clothes-about-banner.jpg"
                alt="Clothes on hangers"
                fill
                className={styles.bannerImage}
            />
            <div className={styles.textOverlay}>
                <h1>Our Story</h1>
                <p>Discover the World with Us</p>
                <Link href="/contact">
                    <button className={styles.contactButton}>
                        Get in touch
                    </button>
                </Link>
            </div>
        </div>
    );
}