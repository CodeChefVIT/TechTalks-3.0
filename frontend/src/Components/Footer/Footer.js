import styles from "./Footer.module.css";
import CodechefLogo from "../../Images/CodechefLogo.svg";
import Instagram from "../../Images/instagram.svg";
import Facebook from "../../Images/facebook.svg";
import Twitter from "../../Images/twitter.svg";
import Github from "../../Images/github.svg";
import Youtube from "../../Images/youtube.svg";
import Linkedin from "../../Images/linkedin.svg";
import Copyright from "../../Images/Copyright.svg";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={styles.container}>
            <img src={CodechefLogo} alt="" />
            <div className={styles.social_container}>
                <h2>Socials</h2>
                <div className={styles.social_img}>
                    <a href="https://facebook.com/codechefvit" target="_blank">
                        <img src={Facebook} alt="" />
                    </a>

                    <a
                        href="https://www.instagram.com/codechefvit/?igshid=YmMyMTA2M2Y%3D"
                        target="_blank"
                    >
                        <img src={Instagram} alt="" />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/codechef-vit-chapter/mycompany/"
                        target="_blank"
                    >
                        <img src={Linkedin} alt="" />
                    </a>

                    <a href="https://twitter.com/codechefvit" target="_blank">
                        <img src={Twitter} alt="" />
                    </a>

                    <a href="https://github.com/codechefvit" target="_blank">
                        <img src={Github} alt="" />
                    </a>

                    <a href="https://youtube.com/codechefvit" target="_blank">
                        <img src={Youtube} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.social_container}>
                <h2>Navigation</h2>
                <div className={styles.nav_container}>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                            <a href="#timer">Timer</a>
                            <a href="#speakers">Speakers</a>
                            <a
                                href="https://www.youtube.com/c/CodeChefVIT"
                                target="_blank"
                            >
                                Watch
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <img className={styles.copyright} src={Copyright} alt="" />
        </div>
    );
};

export default Footer;
