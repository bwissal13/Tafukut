import React from "react";
import { Link } from "react-router-dom"; 

export default function SignUpLink() {
    return (
        <div className="sign-signUp">
            <span>Don't have an account yet?  What are you waitnig for! </span>
            <Link to="/SignUp" className="link">   Sign Up</Link>. 
        </div>
    );
}
