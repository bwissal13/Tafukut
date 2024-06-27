import React from "react";
import '../../assets/styles/Sign.css';
import Nav from "../nav";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
    return (
        <section className="Sign">
            <Nav />
            <div className="">
                <div>
                    <SignUpForm />
                </div>
            </div>
        </section>
    );
}
