import Image from 'next/image';
import styles from './OurMissionSection.module.css'

export default function OurMissionSection() {
    return (
    <div className={styles.missionSection}>
      <div className={styles.textContainer}>
        <h2>Our Mission</h2>
        <p>
          To create unique, high-quality products inspired by global cultures and craftsmanship. We are committed to ethical sourcing, sustainable practices, and supporting communities worldwide.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/our-mission-1.jpg"
          alt="Hands working on a project"
          width={400}
          height={500}
          className={styles.missionImage}
        />
        <Image
          src="/images/our-mission-2.jpg"
          alt="Global map of products"
          width={400}
          height={500}
          className={styles.missionImage}
        />
      </div>
    </div>
    );
}