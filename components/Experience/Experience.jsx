import React from 'react';
import styles from "./Experience.module.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const Experience = () => {
    return (
        <section id={"experience"} className={styles.MainContainer}>
            <h5>What skills I have</h5>
            <h2>My Experiences</h2>

            <div className={styles.container}>
                <div className={styles.left}>
                    <h3>Frontend Development</h3>

                    <div className={styles.articleContainer}>
                        <ExperienceCard lang={"HTML"} level={"Experienced"} />
                        <ExperienceCard lang={"CSS"} level={"Experienced"} />
                        <ExperienceCard lang={"Javascript"} level={"Experienced"} />
                        <ExperienceCard lang={"React"} level={"Experienced"} />
                        <ExperienceCard lang={"NextJS"} level={"Experienced"} />
                        <ExperienceCard lang={"Tailwind"} level={"Experienced"} />
                        <ExperienceCard lang={"Bootstrap"} level={"Basic"} />
                    </div>

                </div>

                <div className={styles.right}>
                    <h3>Backend Development</h3>

                    <div className={styles.articleContainer}>
                        <ExperienceCard lang={"Node JS"} level={"Experienced"} />
                        <ExperienceCard lang={"MongoDB"} level={"Experienced"} />
                        <ExperienceCard lang={"PostgreSQL"} level={"Experienced"} />
                        <ExperienceCard lang={"Firebase"} level={"Experienced"} />
                        <ExperienceCard lang={"GO"} level={"Basic"} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;