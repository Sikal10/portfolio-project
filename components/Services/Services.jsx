import React from 'react';
import styles from "./Services.module.css";
import {BiCheck} from "react-icons/bi";

const Services = () => {
    return (
        <section className={styles.MainContainer} id={"service"}>
            <h5>What I offer</h5>
            <h2>Services</h2>


            <div className={styles.container}>
                <article className={styles.item}>
                    <div className={styles.top}>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className={styles.bottom}>
                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                    </ul>
                </article>

                <article className={styles.item}>
                    <div className={styles.top}>
                        <h3>Web Development</h3>
                    </div>

                    <ul className={styles.bottom}>
                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                    </ul>
                </article>


                <article className={styles.item}>
                    <div className={styles.top}>
                        <h3>Content Creation</h3>
                    </div>

                    <ul className={styles.bottom}>
                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                        <li>
                            <BiCheck className={styles.icon} />
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>

                    </ul>
                </article>

            </div>

        </section>
    );
};

export default Services;