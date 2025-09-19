'use client';

import BannerSection from "../components/about/BannerSection.js";
import OurMissionSection from "../components/about/OurMissionSection.js";
import OurValuesSection from "../components/about/OurValuesSection.js";
import MeetTheTeamSection from "../components/about/MeetTheTeamSection.js";
import styles from './About.module.css';

export default function AboutPage() {
    return (
        <main>
            <BannerSection />
            <OurMissionSection />
            <div className={styles.combinedSections}>
                <OurValuesSection />
                <MeetTheTeamSection />
            </div>
        </main>
    );
}