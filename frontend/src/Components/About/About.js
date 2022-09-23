import styles from "./About.module.css";
import AboutImage from "../../Images/About.svg";

const About = () => {
    return (
        <div className={styles.container} id="about">
            <div className={styles.title_heading_container}>
                <h1>What’s tech Talks?</h1>
                <p>
                    Tech talks is an offline round table discussion that
                    promises an insight into the lives and careers of leading
                    figures in the industry. Talking about emerging
                    technologies, this is not just any guest lecture, but an
                    interactive session providing students with a broader
                    perspective on each domain covered. With speakers from
                    different domains, blending perfectly together, we hope to
                    surpass the success achieved in Tech talks 2.0.
                </p>
            </div>
            <img src={AboutImage} alt="About Image here" />
        </div>
    );
};

export default About;
