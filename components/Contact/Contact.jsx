import React from 'react';
import styles from "./Contact.module.css";
import {MdOutlineForwardToInbox} from "react-icons/md";

const Contact = () => {
    return (
        <section className={styles.MainContainer}>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className={styles.container}>
                {/*left*/}
                <div className={styles.left}>
                    <article className={styles.item}>
                        <MdOutlineForwardToInbox className={styles.icon} />

                        <h4>Email</h4>

                        {/*title*/}
                        <p>support@egattor.com</p>
                        {/*email*/}

                        {/*text*/}
                        <button>Send a message</button>

                    </article>

                    <article className={styles.item}>
                        <MdOutlineForwardToInbox className={styles.icon} />
                        {/*icon*/}

                        <h4>Email</h4>

                        {/*title*/}
                        <p>support@egattor.com</p>
                        {/*email*/}

                        {/*text*/}
                        <button>Send a message</button>

                    </article>

                    <article className={styles.item}>
                        <MdOutlineForwardToInbox className={styles.icon} />
                        {/*icon*/}

                        <h4>Email</h4>

                        {/*title*/}
                        <p>support@egattor.com</p>
                        {/*email*/}

                        {/*text*/}
                        <button>Send a message</button>

                    </article>
                </div>

                {/*right*/}
                <div className={styles.right}>
                    <form action="" className={styles.form}>
                        <div className={styles.input}>
                            <input type="text" placeholder={"Your Full Name"}/>
                        </div>

                        <div className={styles.input}>
                            <input type="text" placeholder={"Your Email"}/>
                        </div>

                        <div className={styles.input}>
                            <textarea placeholder={"Your Message"} cols="30" rows="7"></textarea>
                        </div>

                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;