import Image from 'next/image';
import styles from './MeetTheTeamSection.module.css';

export default function MeetTheTeam() {
    return (
        <div className={styles.teamSection}>
            <h2>Meet the Team</h2>
            <div className={styles.groupPhotoContainer}>
                <Image
                    src="/images/team-photo.jpg"
                    alt="Our team"
                    fill
                    className={styles.groupPhoto}
                />
            </div>
            <div className={styles.teamMembersContainer}>
                <div className={styles.memberCard}>
                    <Image
                        src="/images/member-1.jpg"
                        alt="Romanian Mary"
                        width={120}
                        height={120}
                        className={styles.memberPhoto}
                    />
                    <h3>Romanian Mary</h3>
                    <p>
                        Brief description of Romanian Mary's role and expertise.
                    </p>
                </div>
                <div className={styles.memberCard}>
                    <Image
                        src="/images/member-2.jpg"
                        alt="Gomes Montalier"
                        width={120}
                        height={120}
                        className={styles.memberPhoto}
                    />
                    <h3>Gomes Montalier</h3>
                    <p>
                        Brief description of Gomes Montalier's role and expertise.
                    </p>
                </div>
                <div className={styles.memberCard}>
                    <Image
                        src="/images/member-3.jpg"
                        alt="Musa Broatetes"
                        width={120}
                        height={120}
                        className={styles.memberPhoto}
                    />
                    <h3>Musa Broatetes</h3>
                    <p>
                        Brief description of Musa Broatetes's role and expertise.
                    </p>
                </div>
            </div>
        </div>
    );
}