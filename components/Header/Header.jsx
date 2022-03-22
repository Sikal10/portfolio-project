import styles from "./Header.module.css";
import Cta from "./CTA";
import Image from "next/image";
import HeaderSocials from "./HeaderSocials/HeaderSocials";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h5 className={styles.developer}>Hello I'm</h5>
                <h1 className={styles.name}>Sikal Sikal</h1>
                <h5 className={styles.developer}>Fullstack Developer</h5>

                <Cta />

                <HeaderSocials />

                {/*image*/}
                <div className={styles.imageContainer}>
                    <Image objectFit={"cover"} className={styles.image} src={"/images/codeSikal.svg"} width={"200"} height={"400"}/>
                </div>

                <a className={styles.scroll} href="#">Scroll down</a>

            </div>
        </header>
    );
};

export default Header;