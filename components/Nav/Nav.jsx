import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import styles from "./Nav.module.css";
import {useState} from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav className={styles.nav}>
            <a onClick={() => setActiveNav("#")} className={activeNav === "#" ? styles.active : null} href="#"><AiOutlineHome /></a>
            <a onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? styles.active : null} href="#about"><AiOutlineUser /></a>
            <a onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? styles.active : null} href="#experience"><BiBook /></a>
            <a onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? styles.active : null} href="#portfolio"><RiServiceLine /></a>
            <a onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? styles.active : null} href="#contact"><BiMessageSquareDetail /></a>
        </nav>
    );
};

export default Nav;