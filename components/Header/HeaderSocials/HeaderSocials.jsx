import React from 'react';
import styles from "./HeaderSocials.module.css";
import {AiFillGithub} from "react-icons/ai";

const HeaderSocials = () => {
    return (
        <div className={styles.socials}>
            <a href="#"><AiFillGithub /></a>
            <a href="#">T</a>
            <a href="#">F</a>
        </div>
    );
};

export default HeaderSocials;