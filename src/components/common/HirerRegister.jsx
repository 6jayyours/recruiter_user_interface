import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const UserRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Function to handle username change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);

    // Validate username
    if (e.target.value.length < 3) {
      setUsernameError("Username must be at least 3 characters long");
    } else {
      setUsernameError("");
    }
  };

  // Function to handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // Validate email
    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  // Function to handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    // Validate password length
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  // Function to handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    // Validate confirm password
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields before submission
    if (username.length < 3) {
      setUsernameError("Username must be at least 3 characters long");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    }

    if (usernameError || emailError || passwordError || confirmPasswordError) {
      return;
    }

    // Proceed with form submission
    console.log("Form submitted:", { username, email, password, confirmPassword });
  };

  return (
    <>
      <section className="h-screen flex items-center justify-center relative overflow-hidden bg-register-bg bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto p-4">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <div className="relative overflow-hidden bg-white shadow-lg rounded-md p-6">
                <div className="flex items-center justify-center lg:justify-start">
                  <img src={logo} alt="Recruiter Logo" className="w-11 mb-4 lg:mr-4 lg:mb-0" />
                  <h1 className="text-2xl font-bold">Recruiter</h1>
                </div>
                <h5 className="my-6 text-2xl font-semibold text-center lg:text-left">
                  Recruiter Registration
                </h5>
                <form className="text-left" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="mb-4">
                      <label className="font-semibold">Username:</label>
                      <input
                        className="form-input mt-2 rounded-md w-full border border-gray-300 p-2"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                      {usernameError && (
                        <p className="text-red-500 text-sm mt-1">{usernameError}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="font-semibold">Email:</label>
                      <input
                        className="form-input mt-2 rounded-md w-full border border-gray-300 p-2"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {emailError && (
                        <p className="text-red-500 text-sm mt-1">{emailError}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="font-semibold">Password:</label>
                      <input
                        className="form-input mt-2 rounded-md w-full border border-gray-300 p-2"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {passwordError && (
                        <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="font-semibold">Confirm Password:</label>
                      <input
                        className="form-input mt-2 rounded-md w-full border border-gray-300 p-2"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      {confirmPasswordError && (
                        <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <input
                        type="submit"
                        className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white rounded-md w-full py-2"
                        value="Register"
                      />
                    </div>
                    <div className="text-center">
                      <span className="text-gray-600 mr-2">Already have an account?</span>
                      <Link to={"/login"}>
                        <span className="text-indigo-700 font-bold cursor-pointer hover:underline">Sign In</span>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserRegister;
