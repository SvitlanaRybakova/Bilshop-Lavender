import styles from "../styles/LogIn.Module.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function SignupComp() {
  const {
    firstName,
    onChangeFirstName,
    lastName,
    onChangeLastName,
    emailAddress,
    onChangeEmailAddress,
    townCity,
    onChangeTownCity,
    postcodeZIP,
    onChangePostcodeZIP,
    streetAddress,
    onChangeStreetAddress,
    phone,
    onChangePhone,
    password,
    onChangePassword,
    confirmPassword,
    onChangeConfirmPassword,
    onSubmit,
  } = useContext(UserContext);

  return (
    <form onSubmit={(e) => onSubmit(e)} className="LogIn-Container">
      <h2 className="d-flex align-items-center justify-content-center mt-2">
        SIGN UP
      </h2>
      <div className="rowZ d-flex align-items-center justify-content-center">
        <div className="col-10 col-md-5">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="First Name"
              value={firstName}
              onChange={onChangeFirstName}
            ></input>
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Last Name"
              value={lastName}
              onChange={onChangeLastName}
            ></input>
            <label>Email Address</label>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email Address"
              value={emailAddress}
              onChange={onChangeEmailAddress}
            ></input>
            <label>Town / City</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Town / City"
              value={townCity}
              onChange={onChangeTownCity}
            ></input>
            <label>Postcode / ZIP</label>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Postcode / ZIP"
              value={postcodeZIP}
              onChange={onChangePostcodeZIP}
            ></input>
            <label>Street Address</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Stress Address"
              value={streetAddress}
              onChange={onChangeStreetAddress}
            ></input>
            <label>Phone</label>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Phone"
              value={phone}
              onChange={onChangePhone}
            ></input>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
              ></input>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mb-5"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
              ></input>
            </div>
            <button
              type="submit"
              className={`${styles.loginButton} btn1 btn-primary mb-2 `}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignupComp;
