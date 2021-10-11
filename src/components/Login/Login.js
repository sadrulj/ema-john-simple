import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <div
        className="card text-center mx-auto mt-5 border shadow rounded"
        style={{ width: "36rem", height: "28rem" }}
      >
        <div className="card-body">
          <h2>Login</h2>
          <form onSubmit="">
            <div className="mt-3 text-start">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <br />
            <div className="mt-1 text-start">
              <label
                htmlFor="inputPassword"
                className="form-label"
                id=""
                value="email@example.com"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
            <br />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
          <p className="mt-3">
            new to ema-john? <Link to="/register">Create account</Link>{" "}
          </p>
          <hr />
          <button
            onClick={handleGoogleLogin}
            className="btn btn-light shadow rounded border"
          >
            <i className="fab fa-google text-primary"></i>oogle Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
