import styles from "./Speakers.module.css";
import Banner from "../../Images/SpeakersBanner.png";
import SampleImage1 from "../../Images/Speaker1.png";
import SampleImage2 from "../../Images/Speaker2.png";
import SampleImage3 from "../../Images/Speaker3.png";
import SampleImage4 from "../../Images/Speaker4.png";
import Linkedin from "../../Images/Linkedin.png";
import Link from "../../Images/Link.svg";

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
                        <div className={styles.title_link_image}>
                            <h1>{title}</h1>
                            <a href={url} target="_blank">
                                <img src={Link} />
                            </a>
                        </div>

                        <p>{desc}</p>
                    </div>
                    <div
                        className={styles.box}
                        style={{ boxShadow: "8px 8px 0px #675943" }}
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
                        style={{ boxShadow: "8px 8px 0px #023671" }}
                        onClick={() => (
                            setTitle("Pravin Hungund"),
                            setDesc(
                                "He is widely experienced in leading H2, H3 strategic development programs across Cloud, AI, Metaverse -AR/VR/MR, IOT, Robotics & Drones, 5G, Blockchain.He has designed and delivered 100+ fully immersive solutions as a Solutions Strategist."
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
                        style={{ boxShadow: "8px 8px 0px #632301" }}
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
                        style={{ boxShadow: "8px 8px 0px rgb(87, 2, 116)" }}
                        onClick={() => (
                            setTitle("Ami Sampath"),
                            setDesc(
                                "She is currently a senior UX designer at Amazon, India and has over 8 years of experience working in the design domain in various reputable companies such as SAP, Bosch etc. She has completed her bachelor's from VIT and her master's in product design from IISC Bangalore."
                            ),
                            setUrl("https://www.linkedin.com/in/ami-sampat")
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
