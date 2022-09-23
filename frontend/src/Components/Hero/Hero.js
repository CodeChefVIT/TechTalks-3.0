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
                            <a
                                href="https://ccvit.club/graVITasRegistration"
                                target="_blank"
                            >
                                Watch Now!
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={styles.container}>
                <div className={styles.content_container}>
                    <div className={styles.title_heading_container}>
                        <h1>Tech Talks</h1>
                        <p>
                            The modern knights of the round table are here to
                            enlighten you with their wisdom and present you with
                            enlightening discussions about upcoming (futuristic)
                            technologies. Come join us and become a knight
                            armoured with the knowledge of the future!{" "}
                        </p>
                        <h3>Event Location : Dr. Ambedkar TT</h3>
                    </div>
                    <a
                        href="https://ccvit.club/graVITasRegistration"
                        target="_blank"
                    >
                        <button>Register Now!</button>
                    </a>{" "}
                </div>
                <img src={HeroImage} alt="HeroImage" />
            </div>
        </div>
    );
};

export default Landing;
