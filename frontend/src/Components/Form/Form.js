import React from "react";
import "./Easter.css";
import { useState } from "react";

function Easter() {
    const [egg, setEgg] = useState("");

    const easter_egg = (e) => {
        e.preventDefault();
        if (egg === "off") {
            alert("Go to industreality.codechefvit.com");
        }
    };

    return (
        <div class="container_form">
            <form onSubmit={easter_egg}>
                <input
                    type="text"
                    placeholder="To save electricity you turn the lights"
                    value={egg}
                    onChange={(e) => setEgg(e.target.value)}
                />

                <button id="button_1" type="submit">
                    I'm not an inspector
                </button>
            </form>
        </div>
    );
}

export default Easter;
