import React from "react";

export default function LoginForm() {
    return (
        < >
            <h1 className="sign__title">Sign <span className="sign__title-span">In</span></h1>
            <span className="sign__subtitle">Unlock your coding potential. Sign in to start learning and coding interactively now</span>
            <form>
                <div className="sign__form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Email" />
                </div>
                <div className="sign__form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="sign-forgotContainer">
                    <div>
                        <input className="sign-remember" type="checkbox" />
                        <label className="sign-forgot" htmlFor="">Remember me</label>
                    </div>
                    <a className="sign-forgot">Forgot password?</a>
                </div>
                <button className="sign__button">Login</button>
            </form>
        </>
    );
}
