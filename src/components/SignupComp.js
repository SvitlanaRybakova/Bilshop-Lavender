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
      <div className="rowZ d-flex align-items-center justify-content-center">
        <div className="col-md-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={onChangeFirstName}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={onChangeLastName}
            ></input>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={emailAddress}
              onChange={onChangeEmailAddress}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="Town / City"
              value={townCity}
              onChange={onChangeTownCity}
            ></input>
            <input
              type="number"
              className="form-control"
              placeholder="Postcode / ZIP"
              value={postcodeZIP}
              onChange={onChangePostcodeZIP}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="Stress Address"
              value={streetAddress}
              onChange={onChangeStreetAddress}
            ></input>
            <input
              type="number"
              className="form-control"
              placeholder="Phone"
              value={phone}
              onChange={onChangePhone}
            ></input>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
              ></input>
            </div>
            <button type="submit" className="btn1 btn-primary">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignupComp;
