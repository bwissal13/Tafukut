import React from "react";
import '../assets/styles/Slide1.css';
import '../assets/styles/Slide2.css';
import '../assets/styles/Sign.css';
import { Link } from 'react-router-dom';
export default function Slide3() {
    return (
        <>
            <div className="slide3">

                <p className="slide1_paragraph slide3_paragraph1">
                    We envision a world where coding education is accessible, interactive, and affordable for everyone. Our goal is to empower individuals to learn and grow in the field of technology. We provide high-quality resources to bridge the gap between education and opportunity. We believe everyone should have the chance to excel in the tech industry.</p>
                <h2 className="slide2_title-Features">Let’s build from here</h2>
                <p className="slide3_paragraph">The world’s leading platform for interactive coding tutorials.</p>
                <Link to="/Tutorials" className="sign__button slide3__button"  >Start learning now</Link>
            </div>

        </>)
};