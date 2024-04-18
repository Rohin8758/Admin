import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const authenticate = (e) => {
    e.preventDefault();
    console.log(email + "...." + pass);
    axios
      .post("http://localhost:5000/admin/login", {
        email: email,
        password: pass,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          navigate("/dashboard");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      {/* Horizontal Form */}
      <div className="card card-info mycontainer">
        <div className="card-header">
          <h3 className="card-title">Login Form</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <form className="form-horizontal">
          <div className="card-body">
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                  value={pass}
                  onChange={(e) => {setPass(e.target.value)}}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-sm-2 col-sm-10">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck2">
                    Remember me
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* /.card-body */}
          <div className="card-footer">
            <button type="submit" className="btn btn-info" onClick={authenticate}>
              Sign in
            </button>
          </div>
          {/* /.card-footer */}
        </form>
      </div>
    </div>
  );
};

export default Login;
