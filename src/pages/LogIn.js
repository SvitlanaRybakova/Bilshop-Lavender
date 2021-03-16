import React, { useState } from "react";
import styles from "../styles/LogIn.Module.css";

function LogIn() {
  return (
    <div className="LogIn-Container">
      <div className="rowZ d-flex align-items-center justify-content-center">
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
            ></input>
            &nbsp;&nbsp;&nbsp;
            <span className="second-word-formatting"></span>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              &nbsp;&nbsp;&nbsp;
              <span className="second-word-formatting"></span>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              ></input>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="second-word-formatting"></span>
              <label class="form-check-label" for="exampleCheck1">
                Remember me
              </label>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="second-word-formatting"></span>
            <button type="submit" class="btn1 btn-primary">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
