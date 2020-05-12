import React, { useState } from 'react';

const AnotherForm = (props) => {
    // variables : these variables live inside the component, and can be passed to the children
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    // error messages
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    // functions 
    const createUser = (e) => {
        e.preventDefault();
        
        let errors = ["", "", ""];
        
        if (firstName.length === 0) errors[0] = "First name required"
        else if (firstName.length < 3) errors[0] = "First name must be at least 3 characters"
        else errors[0] = ""
        setFirstNameError(errors[0]);
        
        if (lastName.length === 0) errors[1] = "Last name required"
        else if (lastName.length < 3) errors[1] = "Last name must be more than 3 characters"
        else errors = ""
        setLastNameError(errors[1]);
        
        // if (email.length === 0) errors[2] = "email required"
        // // else if (!(email.includes("lia"))) errors[2] = "invalid email"
        // else errors[2] = ""
        setEmailError(errors[2]);
        
        if (password.length === 0) {
            setPasswordError("password required")
            // return;
        }
        
        if (confirmPassword.length === 0) setConfirmPasswordError("Please input to confirm your password")
        
        if (password.length != confirmPassword.length) setPasswordError("Password lengths do not match");
        else {
            for (let i = 0; i < password.length; i++) {
                if (password[i] != confirmPassword[i]) {
                    setConfirmPasswordError("Passwords do not match");
                    return;
                }
            }
            // setConfirmPasswordError("");
            // setPasswordError("")
        }
        if (
            firstNameError.length === 0 &&
            lastNameError.length === 0 &&
            emailError.length === 0 &&
            passwordError.length === 0 &&
            confirmPasswordError.length === 0
            ) {
                console.log("Welcome ", firstName);
            }
            console.log("errors");
            console.log(errors);
        }
        // handlers
        const firstNameHandler = (e) => {
            setFirstName(e.target.value);
            if (firstName.length >= 0 && firstName.length <= 2) {
            setFirstNameError("First name must contain at least 3 characters");
        } else if (firstName.length >= 3) {
            setFirstNameError("");
        }
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if (lastName.length >= 1 && lastName.length < 3) {
            setLastNameError("Last name must contain at least 3 characters");
        } else if (lastName.length >= 3) {
            setLastNameError("");
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
        // if (email.includes("@")) {
        //     setEmailError("");
        // } else {
        //     setEmailError("in valid email :(");
        // }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        // let str = "";
        // if (password.length < 8) {
        //     str += "password needs to at least 8 characters";
        // }
        // setPasswordError(str);
    }
    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
    }
    return (
        <>
            <h1>Another Form</h1>
            <p>this form have live validations</p>
            <form onSubmit={createUser} className="row justify-content-center form-group">
                <div className="col-8">
                    <div className="row">
                        First Name : <input type="text" name="firstName"
                            onChange={firstNameHandler} className="form-control" />
                        {
                            firstNameError
                                ? <p className="boldMe">{firstNameError}</p>
                                : ""
                        }
                    </div>
                    <div className="row">
                        Last Name: <input type="text" name="lastName"
                            onChange={lastNameHandler} className="form-control" />
                        {
                            lastNameError
                                ? <p className="boldMe">{lastNameError}</p>
                                : ""
                        }
                    </div>
                    <div className="row">
                        Email : <input type="text" name="email"
                            onChange={emailHandler} className="form-control" />
                        {
                            emailError
                                ? <p className="boldMe">{emailError}</p>
                                : ""
                        }
                    </div>
                    <div className="row">
                        Password :
                    <input type="password" name="password"
                            onChange={passwordHandler} className="form-control" />
                        {
                            passwordError
                                ? <p className="boldMe">{passwordError}</p>
                                : ""
                        }
                    </div>
                    <div className="row">
                        Confirm Password :
                    <input type="password" name="password"
                            onChange={confirmPasswordHandler} className="form-control" />
                        {
                            confirmPasswordError
                                ? <p className="boldMe">{confirmPasswordError}</p>
                                : ""
                        }
                    </div>
                    <input type="submit" className="btn btn-small btn-primary"
                        value="Submit and Create new user!" />
                </div>
            </form>
        </>
    )
}
export default AnotherForm;