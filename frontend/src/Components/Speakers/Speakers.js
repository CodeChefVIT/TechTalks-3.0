import styles from "./Speakers.module.css";
import Banner from "../../Images/SpeakersBanner.png";
import SampleImage1 from "../../Images/Speaker1.png";
import SampleImage2 from "../../Images/Speaker2.png";
import SampleImage3 from "../../Images/Speaker3.png";
import SampleImage4 from "../../Images/Speaker4.png";
import Linkedin from "../../Images/Linkedin.png";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Speakers = () => {
    // const [images, setImages] = useState(SampleImage1);

    // const navigate = useNavigate();

    const [desc, setDesc] = useState(
        "After working in Dubai for 4 years as Technical Product Architect, started his Tech services firm, called Myrl Tech in 2018 and since then, they've worked with multiple Enterprise clients to build SAAS products."
    );
    const [title, setTitle] = useState("Akhil Sharma");
    const [url, setUrl] = useState("https://www.linkedin.com/in/akhilsails/");
    // console.log(images);

    return (
        <div className={styles.main_container} id="speakers">
            <img src={Banner} alt="Banner Image" />

            <div className={styles.banner_bg}></div>
            <div className={styles.container}>
                <h1>Speakers</h1>
                <div className={styles.container_row_1}>
                    <div className={styles.box_main_container}>
                        <div className={styles.box_main_top}>
                            <div className={styles.box_main_green_button}></div>
                            <div className={styles.box_main_red_button}></div>
                            <div
                                className={styles.box_main_yellow_button}
                            ></div>
                        </div>
                        <a href={url} target="_blank">
                            <h1>{title}</h1>
                        </a>
                        <p>{desc}</p>
                    </div>
                    <div
                        className={styles.box}
                        onClick={() => (
                            setTitle("Akhil Sharma"),
                            setDesc(
                                "After working in Dubai for 4 years as Technical Product Architect, started his Tech services firm, called Myrl Tech in 2018 and since then, they've worked with multiple Enterprise clients to build SAAS products."
                            ),
                            setUrl("https://www.linkedin.com/in/akhilsails/")
                        )}
                    >
                        <img src={SampleImage1} alt="" />
                    </div>
                    <div
                        className={styles.box}
                        onClick={() => (
                            setTitle("Pravin Hungund"),
                            setDesc(
                                "Boht achha padhta hai, editorial give some content :("
                            ),
                            setUrl("https://www.linkedin.com/in/pravinhungund")
                        )}
                    >
                        <img src={SampleImage2} alt="" />
                    </div>
                </div>
                <div className={styles.container_row_2}>
                    <div
                        className={styles.box}
                        onClick={() => (
                            setTitle("Gautam Sampathkumar"),
                            setDesc(
                                "He is the founder and CEO of Indra Capital, a Cryptocurrency focused firm with a number of products, primary among them beingAiravatBot, a telegram based crypto chatbot and YieldWallet, a provider of staking services for a number of high value blockchain networks."
                            ),
                            setUrl("https://www.linkedin.com/in/gsampath/")
                        )}
                    >
                        <img src={SampleImage3} alt="" />
                    </div>
                    <div
                        className={styles.box}
                        onClick={() => (
                            setTitle("Ami Sampath"),
                            setDesc(
                                "Boht achha padhta hai, editorial give some content :("
                            ),
                            setUrl("")
                        )}
                    >
                        <img src={SampleImage4} alt="" />
                    </div>
                    {/* <div
                        className={styles.box}
                        onClick={() => (
                            setTitle("African Prince Dhaval"),
                            setDesc(
                                "Boht achha padhta hai, editorial give some content :("
                            )
                        )}
                    >
                        <img src={SampleImage4} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Speakers;
