import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUsers, faStar, faLightbulb, faRecycle, faHandshake, faGem } from '@fortawesome/free-solid-svg-icons';
import styles from './OurValuesSection.module.css';

export default function OurValuesSection() {
  return (
    <div className={styles.valuesSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2>Our Values</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircle} className={styles.listIcon} />
              <span>Sustainability</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className={styles.listIcon} />
              <span>Community</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className={styles.listIcon} />
              <span>Quality</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircle} className={styles.listIcon} />
              <span>Innovation</span>
            </li>
          </ul>
        </div>
        <div className={styles.iconGrid}>
          {/* Rząd 1 */}
          <FontAwesomeIcon icon={faRecycle} className={styles.valueIcon} />
          <FontAwesomeIcon icon={faHandshake} className={styles.valueIcon} />
          {/* Rząd 2 */}
          <FontAwesomeIcon icon={faStar} className={styles.valueIcon} />
          <FontAwesomeIcon icon={faLightbulb} className={styles.valueIcon} />
          {/* Rząd 3 */}
          <FontAwesomeIcon icon={faUsers} className={styles.valueIcon} />
          <FontAwesomeIcon icon={faGem} className={styles.valueIcon} />
        </div>
      </div>
    </div>
  );
}