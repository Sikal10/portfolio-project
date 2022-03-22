import React from 'react';
import styles from "./About.module.css";
import Image from "next/image";
import {FaAward} from "react-icons/fa";
import {HiOutlineUsers} from "react-icons/hi";
import {MdWorkOutline} from "react-icons/md";

const About = () => {
    return (
        <section id={"about"} className={styles.MainContainer}>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            {/*container*/}
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imageBG}>
                        {/*image*/}
                        <div className={styles.imageContainer}>
                            <Image className={styles.image} src={"/images/me.JPG"} objectFit={"cover"} layout={"fill"} />
                        </div>
                    </div>
                </div>

                {/*right*/}
                <div className={styles.right}>
                    {/*card-container*/}
                    <div className={styles.cardContainer}>
                        <article className={styles.card}>
                            <FaAward className={styles.icon} />

                            <h3>Experience</h3>
                            <p>4+ Years Working</p>
                        </article>

                        <article className={styles.card}>https://github.com/Sikal10/portfolio-project.git
                            <MdWorkOutline className={styles.icon} />

                            <h3>Projects</h3>
                            <p>20+ Completed</p>
                        </article>

                    </div>

                    {/*text*/}

                    <p className={styles.text}>Hi, I'm Abiola, a Full-Stack Web Developer.
                        I use an artistic approach to solve problems Efficiently.
                        I've been professionally connected with the web development industry and information technology for quite some years.
                        Effectiveness in the industry today requires an acute parity between development and artistic tastes.aries to create awesome user experience
                    </p>

                    {/*button*/}
                    <button className={styles.button}>Let's Talk</button>
                </div>
            </div>

        </section>
    );
};

export default About;