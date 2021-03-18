import styles from "../styles/LogIn.Module.css";

function LoginComp() {
  return (
    <div className="LogIn-Container">
      <div className="rowZ d-flex align-items-center justify-content-center">
        <div className="col-md-3">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email Address"
            ></input>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              ></input>
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <button className="btn1 btn-primary">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
