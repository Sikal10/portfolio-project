import styles from "./Cta.module.css";

const Cta = () => {
    return (
        <div className={styles.cta}>
            <a className={styles.cv} href="#" download>Download CV</a>
            <a className={styles.talk} href="#">Let's talk</a>
        </div>
    );
};

export default Cta;