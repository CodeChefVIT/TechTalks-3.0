import styles from "./Footer.module.css";
import CodechefLogo from "../../Images/CodechefLogo.png";
import Instagram from "../../Images/Instagram.png";
import Facebook from "../../Images/Facebook.png";
import Twitter from "../../Images/Twitter.png";
import Github from "../../Images/Github.png";
import Youtube from "../../Images/Youtube.png";
import Linkedin from "../../Images/Linkedin.png";
import Copyright from "../../Images/Copyright.png";

const Footer = () => {
    return (
        <div className={styles.container}>
            <img src={CodechefLogo} alt="" />
            <div className={styles.social_container}>
                <h2>Socials</h2>
                <div className={styles.social_img}>
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Github} alt="" />
                    <img src={Youtube} alt="" />
                </div>
            </div>
            <div className={styles.social_container}>
                <h2>Navigation</h2>
                <div className={styles.nav_container}>
                    <ul>
                        <li>
                            <a href="">About</a>
                            <a href="">Timer</a>
                            <a href="">Speakers</a>
                            <a href="">Watch</a>
                        </li>
                    </ul>
                </div>
            </div>
            <img className={styles.copyright} src={Copyright} alt="" />
        </div>
    );
};

export default Footer;
