import styles from "./EventSection.module.css";
import EventBg from "../../Images/EventBg.png";

const EventSection = () => {
    var countDownDate = new Date("Sept 25, 2022 15:37:25").getTime();

    // Update the count down every 1 second

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    return (
        <div className={styles.container} id="timer">
            <h1>Event starts in</h1>
            <div className={styles.boxes_container}>
                <div className={styles.box_sub_container}>
                    <div className={styles.box1}>
                        <h1>{days}</h1>
                    </div>
                    <h1>Days</h1>
                </div>

                <div className={styles.box_sub_container}>
                    <div className={styles.box2}>
                        <h1>{hours}</h1>
                    </div>
                    <h1>Hours</h1>
                </div>

                <div className={styles.box_sub_container}>
                    <div className={styles.box3}>
                        <h1>{minutes}</h1>
                    </div>
                    <h1>Minutes</h1>
                </div>
            </div>

            <img src={EventBg} alt="About Image here" />

            <a href="https://www.youtube.com/c/CodeChefVIT" target="_blank">
                <button>Watch Now!</button>
            </a>
        </div>
    );
};

export default EventSection;
