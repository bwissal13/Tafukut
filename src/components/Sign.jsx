import React from "react";
import '../assets/styles/Sign.css';
import Tafukut from '../assets/images/TAFUKUT.svg';
import Nav from "./nav";
import LoginForm from "./LoginForm";
import SignImage from "./SignImage";
import SignUpLink from "./SignUpLink";

export default function Sign() {
    return (
        <section className="Sign">

            <div className="Sign-flex">
                <div>
                    <Nav />
                    <div className="Sign-flex--center">
                        <LoginForm />
                        <SignUpLink />
                    </div>
                   
                </div> <div>
                        <SignImage />
                    </div>

            </div>
        </section>
    );
}
