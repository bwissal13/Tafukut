// import React from "react";

// export default function SignUpForm() {
//     return (
//         <div className="Sign-flex--center signUp">
//             <h1 className="sign__title">Sign <span className="sign__title-span">Up</span></h1>
//             <span className="sign__subtitle">Join our development education platform. Sign up to start learning and coding interactively now</span>
//             <form className="signup_form">
//                 <div className="sign__form-group">
//                     <label htmlFor="">Full Name</label>
//                     <input type="text" placeholder="Full Name" />
//                 </div>
//                 <div className="sign__form-group">
//                     <label htmlFor="">Username</label>
//                     <input type="text" placeholder="Username" />
//                 </div>
//                 <div className="sign__form-group">
//                     <label htmlFor="">Email</label>
//                     <input type="email" placeholder="Email" />
//                 </div>
//                 <div className="sign__form-group">
//                     <label htmlFor="">Password</label>
//                     <input type="password" placeholder="Password" />
//                 </div>
//                 <div className="sign__form-group">
//                     <label htmlFor="">Confirm Password</label>
//                     <input type="password" placeholder="Confirm Password" />
//                 </div>
//                 <div className="sign__form-group">
//                     <label htmlFor="">Date of Birth</label>
//                     <input type="date" />
//                 </div>
//                 <div className="sign__form-group">
//                     <label htmlFor="">Programming Experience</label>
//                     <select>
//                         <option value="">Select Experience Level</option>
//                         <option value="beginner">Beginner</option>
//                         <option value="intermediate">Intermediate</option>
//                         <option value="advanced">Advanced</option>
//                     </select>
//                 </div>
//                 <div className="sign__form-group">
//                     <label htmlFor="">Preferred Programming Languages</label>
//                     <input type="text" placeholder="E.g., JavaScript, Python, etc." />
//                 </div>
//                 <div className="sign__form-group">
//                     <label htmlFor="">Learning Goals</label>
//                     <input rows="4" placeholder="What are your goals in learning development?" />
//                 </div>
//                 <button className="sign__button">Sign Up</button>
//             </form>
//         </div>
//     );
// }
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
export default function SignUpForm() {
    const history = useNavigate();
    // State to manage form data
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        dateOfBirth: "",
        experienceLevel: "",
        preferredLanguages: "",
        learningGoals: ""
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); // Example: log form data
        history("/Home");
    };

    return (
        <div className="Sign-flex--center signUp">
            <h1 className="sign__title">Sign <span className="sign__title-span">Up</span></h1>
            <span className="sign__subtitle">Join our development education platform. Sign up to start learning and coding interactively now</span>
            <form className="signup_form" onSubmit={handleSubmit}>
                <div className="sign__form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name" 
                        value={formData.fullName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="sign__form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username"
                        name="username"
                        placeholder="Username" 
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="sign__form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="sign__form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="sign__form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password" 
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="sign__form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input 
                        type="date" 
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="sign__form-group">
                    <label htmlFor="experienceLevel">Programming Experience</label>
                    <select 
                        id="experienceLevel"
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Experience Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                <div className="sign__form-group">
                    <label htmlFor="preferredLanguages">Preferred Programming Languages</label>
                    <input 
                        type="text" 
                        id="preferredLanguages"
                        name="preferredLanguages"
                        placeholder="E.g., JavaScript, Python, etc." 
                        value={formData.preferredLanguages}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="sign__form-group">
                    <label htmlFor="learningGoals">Learning Goals</label>
                    <input 
                        id="learningGoals"
                        name="learningGoals"
                        rows="4" 
                        placeholder="What are your goals in learning development?" 
                        value={formData.learningGoals}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="sign__button">Sign Up</button>
            </form>
        </div>
    );
}
