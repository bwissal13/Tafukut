import React from "react";
import '../assets/styles/Slide1.css';
import '../assets/styles/Slide2.css';

function Feature({ text }) {
    return (
        <div className="slide2_Features_container">
            <p className="slide2_Features_container-paragraph">{text}</p>
        </div>
    );
}

export default function Slide2() {
    const features = [
        "Interactive Learning: Watch coding tutorials and apply your knowledge in real-time.",
        "Interactive Learning: Watch coding tutorials and apply your knowledge in real-time.",
        "Interactive Learning: Watch coding tutorials and apply your knowledge in real-time."
    ];

    return (
        <div className="slide2">
            <h2 className="slide2_title-Features">Features</h2>
            {features.map((feature, index) => (
                <Feature key={index} text={feature} />
            ))}
        </div>
    );
}
