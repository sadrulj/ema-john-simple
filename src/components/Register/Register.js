import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div
        className="card text-center mx-auto mt-2 border shadow rounded"
        style={{ width: "36rem", height: "34rem" }}
      >
        <div className="card-body">
          <h2>Create an account</h2>
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
            <div className="text-start">
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
            <div className="text-start">
              <label
                htmlFor="inputPassword"
                className="form-label"
                id=""
                value="email@example.com"
              >
                Re-enter Password
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
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
          <hr />
          <button className="btn btn-light shadow rounded border">
            <i className="fab fa-google text-primary"></i>oogle Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
