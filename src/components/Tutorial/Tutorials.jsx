
import React from "react";
import Nav from "../nav";


export default function Tutorials() {
    const tutorials = [
        { id: 1, videoSrc: "./Enregistrement.mp4", description: "Watch coding tutorials 1...", link: "http://localhost:5173/Tuto", overlayText: "Coding Tutorial 1" },
        { id: 2, videoSrc: "./Enregistrement.mp4", description: "Watch coding tutorials 2...", link: "http://localhost:5173/Tuto", overlayText: "Coding Tutorial 2" },
        { id: 3, videoSrc: "./Enregistrement.mp4", description: "Watch coding tutorials 3...", link: "http://localhost:5173/Tuto", overlayText: "Coding Tutorial 3" },
        { id: 4, videoSrc: "./Enregistrement.mp4", description: "Watch coding tutorials 4...", link: "http://localhost:5173/Tuto", overlayText: "Coding Tutorial 4" },
        { id: 5, videoSrc: "./Enregistrement.mp4", description: "Watch coding tutorials 5...", link: "http://localhost:5173/Tuto", overlayText: "Coding Tutorial 5" },
        { id: 6, videoSrc: "./Enregistrement.mp4", description: "Watch coding tutorials 6...", link: "http://localhost:5173/Tuto", overlayText: "Coding Tutorial 6" },
    ];

    return (
        <>
            <Nav />
            <h2 className="slide1_title">Courses</h2>
            <div className="Tutorials_container">
                {tutorials.map(tutorial => (
                    <div key={tutorial.id} className="Tutorial_container">
                        <div className="Tutorial_container-color">
                            <a href={tutorial.link} target="_blank" rel="noopener noreferrer" className="video-wrapper">
                                <video 
                                    src={tutorial.videoSrc} 
                                    onMouseOver={e => e.target.play()} 
                                    onMouseOut={e => e.target.pause()} 
                                    muted
                                    loop
                                ></video>
                                <div className="video-overlay">
                                    <div className="overlay-shape">
                                        <p>{tutorial.overlayText}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className="Tutorial_paragraph">{tutorial.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
