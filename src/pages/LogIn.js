import React, { useContext, useEffect, useState } from "react";
import LoginComp from "../components/LoginComp";
import SignupComp from "../components/SignupComp";
import { UserContext } from "../contexts/UserContext";
import styles from "../styles/LogIn.Module.css";

function LogIn() {
  const { onSubmit } = useContext(UserContext);

  const [renderLoginBoolean, setRenderLoginBoolean] = useState(true);

  useEffect(() => {}, [renderLoginBoolean]);

  const renderLogin = () => {
    setRenderLoginBoolean(true);
  };

  const renderSignup = () => {
    setRenderLoginBoolean(false);
  };

  {
    if (renderLoginBoolean === true) {
      return (
        <div>
          <LoginComp />
          <button
            onClick={() => renderSignup()}
            className={`${styles.buttonBtn2} btn btn-primary mb-5`}
          >
            Create an account here
          </button>
        </div>
      );
    } else if (renderLoginBoolean === false) {
      return (
        <div>
          <SignupComp />
          <button
            onClick={() => renderLogin()}
            className={`${styles.buttonBtn2} btn btn-primary mb-5`}
          >
            Already have an account? Log in here
          </button>
        </div>
      );
    }
  }
}

export default LogIn;
