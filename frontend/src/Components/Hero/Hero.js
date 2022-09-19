import styles from "./Hero.module.css";
import TechTalksLogo from "../../Images/TechTalks.png";
import HeroImage from "../../Images/HeroImage.png";
const Landing = () => {
    return (
        <div className={styles.main_container} id="Hero">
            <nav className={styles.navbar_container}>
                <img src={TechTalksLogo} alt="TechTalksLogo" />
                <div className={styles.navbar_list_container}>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#speakers">Speakers</a>
                        </li>
                        <li className={styles.Watch_now}>
                            <a href="/">Watch Now!</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={styles.container}>
                <div className={styles.content_container}>
                    <div className={styles.title_heading_container}>
                        <h1>Tech Talks</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{" "}
                        </p>
                    </div>
                    <button>Register Now!</button>
                </div>
                <img src={HeroImage} alt="HeroImage" />
            </div>
        </div>
    );
};

export default Landing;
