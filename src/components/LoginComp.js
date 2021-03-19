import styles from "../styles/LogIn.Module.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

function LoginComp() {
  const {
    onChangeLoginEmail,
    loginEmail,
    onChangeLoginPassword,
    loginPassword,
    onSubmitLogin,
  } = useContext(UserContext);
  return (
    <form onSubmit={(e) => onSubmitLogin(e)} className="LogIn-Container">
      <div className="rowZ d-flex align-items-center justify-content-center">
        <div className="col-md-3">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              onChange={onChangeLoginEmail}
              value={loginEmail}
            ></input>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={onChangeLoginPassword}
                value={loginPassword}
              ></input>
            </div>
            <button type="submit" className="btn1 btn-primary">
              Log in
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginComp;
