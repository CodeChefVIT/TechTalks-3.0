import styles from "./Speakers.module.css";
import Banner from "../../Images/SpeakersBanner.png";

const Speakers = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.banner_bg}></div>
            <div className={styles.container}>
                
            </div>
            
            <img src={Banner} alt="Banner Image" />
        </div>
    );
};

export default Speakers;
