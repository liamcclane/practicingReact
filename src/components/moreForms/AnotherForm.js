import React, { useState } from 'react';

const AnotherForm = (props) => {
    // variables : these variables live inside the component, and can be passed to the children
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("Confirm Password")
    // error messages
    const [firstNameError, setFirstNameError] = useState("First Name required")
    const [lastNameError, setLastNameError] = useState("Last Name required")
    const [emailError, setEmailError] = useState("Email Required")
    const [passwordError, setPasswordError] = useState("Password required")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    // functions 
    const createUser = (e) => {
        e.preventDefault();
        if (
            firstNameError.length === 0 &&
            lastNameError.length === 0 &&
            emailError.length === 0 &&
            passwordError.length === 0 &&
            confirmPasswordError.length === 0
        ) {
            console.log("Welcome ", firstName);
        } else {
            console.log("errors");
        }
    }
    // handlers
    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
        if (firstName.length >= 1 && firstName.length < 3) {
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
        if (email.includes("@")) {
            setEmailError("");
        } else {
            setEmailError("in valid email :(");
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        let str = "";
        if (password.length < 8) {
            str += "password needs to at least 8 characters";
        }
        setPasswordError(str);
    }
    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
        let str = "";
        for (let i = 0; i < confirmPassword.length; i++) {
            console.log(confirmPassword[i]);
            console.log(password[i]);
            if (confirmPassword[i] != password[i]) {
                str += "passwords do NOT match";
                setConfirmPasswordError(str);
                return;
            }
        }
        setConfirmPasswordError(str);
    }
    return (
        <>
            <h1>Another Form</h1>
            <p>this form have live validations</p>
            <form onSubmit={createUser} className="form-group">
                <div>
                    First Name : <input type="text" name="firstName"
                        onChange={firstNameHandler} className="form-control" />
                    {
                        firstNameError
                            ? <p className="boldMe">{firstNameError}</p>
                            : ""
                    }
                </div>
                <div>
                    Last Name: <input type="text" name="lastName"
                        onChange={lastNameHandler} className="form-control" />
                    {
                        lastNameError
                            ? <p className="boldMe">{lastNameError}</p>
                            : ""
                    }
                </div>
                <div>
                    Email : <input type="text" name="email"
                        onChange={emailHandler} className="form-control" />
                    {
                        emailError
                            ? <p className="boldMe">{emailError}</p>
                            : ""
                    }
                </div>
                <div>
                    Password :
                    <input type="password" name="password"
                        onChange={passwordHandler} className="form-control" />
                    {
                        passwordError
                            ? <p className="boldMe">{passwordError}</p>
                            : ""
                    }
                </div>
                <div>
                    Confirm Password :
                    <input type="password" name="password"
                        onChange={confirmPasswordHandler} className="form-control" />
                    {
                        confirmPasswordError
                            ? <p className="boldMe">{confirmPasswordError}</p>
                            : ""
                    }
                </div>
                <input type="submit"  className="btn btn-small btn-primary"
                 value="Submit and Create new user!" />
            </form>
        </>
    )
    // const [state, setState] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     errorMessages: {
    //         firstNameError: "First Name required",
    //         lastNameError: "Last Name required",
    //         emailError: "Email required",
    //         passwordError: "Password is required"
    //     }
    // });
    // const onChange = (e) => {
    //     if (state.firstName.length === 1) {
    //         console.log("hello")
    //         setState({
    //             ...state,
    //             errorMessages: {
    //                 ...state.errorMessages,
    //                 firstNameError: "First name must contain at least 3 characters"
    //             }
    //         })
    //     }
    //     setState({
    //         ...state,
    //         [e.target.name]: e.target.value
    //     })
    // }
}
export default AnotherForm;