import React from 'react';
import styles from "./ExperienceCard.module.css";
import {HiBadgeCheck} from "react-icons/hi";

const ExperienceCard = ({lang, level}) => {
    return (
        <article className={styles.article}>
            <HiBadgeCheck className={styles.icon}/>

            <div>
                <h4>{lang}</h4>
                <small className={styles.small}>{level}</small>
            </div>
        </article>
    );
};

export default ExperienceCard;