import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/slice/authSlice';

const UserRegister = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const dispatch = useDispatch();

  // Function to handle firstname change
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);

    // Validate firstname
    if (e.target.value.length < 6) {
      setFirstnameError("First name must be at least 6 characters long");
    } else {
      setFirstnameError("");
    }
  };

  // Function to handle lastname change
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);

    // Validate lastname
    if (e.target.value.length < 2) {
      setLastnameError("Last name must be at least 2 characters long");
    } else {
      setLastnameError("");
    }
  };

  // Function to handle username change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);

    // Validate username
    if (e.target.value.length < 5) {
      setUsernameError("Username must be at least 5 characters long");
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
    const password = e.target.value;
    setPassword(password);
  
    // Validate password for special character, number, uppercase, and lowercase
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 6 characters long and include one special character, one number, one uppercase letter, and one lowercase letter");
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
    const formData = {
      username,
      password,
    };
    dispatch(registerUser(formData))
  };

  return (
    <>
      <section className="h-screen flex items-center justify-center relative overflow-hidden bg-register-bg bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto p-4">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <div className="relative overflow-hidden bg-white shadow-lg rounded-md p-6">
                <div className="flex items-center justify-center lg:justify-center">
                  <img src={logo} alt="Recruiter Logo" className="w-11 mb-4 lg:mr-4 lg:mb-0" />
                  <h1 className="text-2xl font-bold">Recruiter</h1>
                </div>
                <h5 className="my-6 text-2xl font-semibold text-center lg:text-left">
                  User Registration
                </h5>
                <form className="text-left" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="mb-2">
                      <label className="font-semibold">First Name:</label>
                      <input
                        className="form-input mt-1 rounded-md w-full border border-gray-300 p-1"
                        type="text"
                        value={firstname}
                        onChange={handleFirstnameChange}
                      />
                      {firstnameError && (
                        <p className="text-red-500 text-sm mt-1">{firstnameError}</p>
                      )}
                    </div>
                    <div className="mb-2">
                      <label className="font-semibold">Last Name:</label>
                      <input
                        className="form-input mt-1 rounded-md w-full border border-gray-300 p-1"
                        type="text"
                        value={lastname}
                        onChange={handleLastnameChange}
                      />
                      {lastnameError && (
                        <p className="text-red-500 text-sm mt-1">{lastnameError}</p>
                      )}
                    </div>
                    <div className="mb-2">
                      <label className="font-semibold">Username:</label>
                      <input
                        className="form-input mt-1 rounded-md w-full border border-gray-300 p-1"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                      {usernameError && (
                        <p className="text-red-500 text-sm mt-1">{usernameError}</p>
                      )}
                    </div>
                    <div className="mb-2">
                      <label className="font-semibold">Email:</label>
                      <input
                        className="form-input mt-1 rounded-md w-full border border-gray-300 p-1"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {emailError && (
                        <p className="text-red-500 text-sm mt-1">{emailError}</p>
                      )}
                    </div>
                    <div className="mb-2">
                      <label className="font-semibold">Password:</label>
                      <input
                        className="form-input mt-1 rounded-md w-full border border-gray-300 p-1"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {passwordError && (
                        <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                      )}
                    </div>
                    <div className="mb-2">
                      <label className="font-semibold">Confirm Password:</label>
                      <input
                        className="form-input mt-1 rounded-md w-full border border-gray-300 p-1"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      {confirmPasswordError && (
                        <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
                      )}
                    </div>
                    <div className="mb-2">
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
