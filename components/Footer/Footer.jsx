import React from 'react';
import styles from "./Footer.module.css";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>Sikal</h2>

                <div className={styles.links}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Experience</a>
                    <a href="#">Services</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contact</a>
                </div>

                <div className={styles.socials}>
                    <div>
                        <FaFacebookF className={styles.icon} />
                    </div>

                    <div>
                        <FaInstagram className={styles.icon} />
                    </div>

                    <div>
                        <FaTwitter className={styles.icon} />
                    </div>
                </div>

                <p>All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;