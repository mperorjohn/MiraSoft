import React, { useState } from "react";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
// import Label from "../components/Label";
import LabelAstrisk from "../components/LabelAstrisk";
import Img from "../components/Img";

const Login = () => {
  // State definition for Email and password
  const [inputEmailHandler, setInputEmailHandler] = useState("");

  const [inputPasswordHandler, setInputPasswordHandler] = useState("");

  // Function to handle changes for button disabled
  const HandleInputEmailChange = (e) => {
    setInputEmailHandler(e.target.value);
  };

  const HandleInputPasswordChange = (event) => {
    setInputPasswordHandler(event.target.value);
  };
  return (
    <div>
      <div className="container " style={{ padding: "20px" }}>
        <div className="row " style={{ marginTop: "30px" }}>
          <div className="col-md-3 "></div>
          <div
            className="col-md-6 card"
            style={{ boxShadow: "#8BB715 10px 5px 30px" }}
          >
            <form action="" className="card-body">
              <Img
                src={"./png-transparent-abstract-letter-m-logo@3x.png"}
                className={"text-center"}
                width={"160"}
                heigth={"160"}
                alt={"MiraSoft Logo"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItem: " center",
                  margin: "auto",
                }}
              />
              {/* <h2 className="text-primary text-center">Sign In MiraSoft</h2> */}
              <hr />
              <h6 className="text-center  text-danger">
                <span>Note:</span>
                This page is mainly for MiraSoft Staffs
              </h6>
              <br />
              <div className="login-panel  panel-default"></div>
              <LabelAstrisk
                text={"Username"}
                className={"label fw-bold"}
                htmlFor={"username"}
                id={"username"}
              />
              <Input
                type={"text"}
                id={"email"}
                placeholder={"Mperorjohn@example.com"}
                className={"form form-control shadow-none input"}
                onChange={HandleInputEmailChange}
              />
              <br />
              <LabelAstrisk
                text={"Password"}
                htmlFor={"password"}
                className={"label fw-bold"}
              />
              <Input
                type={"password"}
                id={"password"}
                className={"form form-control shadow-none input"}
                onChange={HandleInputPasswordChange}
              />
              {/* <div className="remember">
                <Input type={"checkbox"} id={"remember me"} />
                <Label text={"Remember me"} />
              </div> */}
              <p style={{ marginTop: "10px" }}>
                <Link
                  to={"/resetpassword"}
                  style={{ textDecoration: "none" }}
                  className={"label"}
                >
                  Forgot Password?
                </Link>
              </p>
              <br />
              <Button
                text={"Login"}
                type={"submit"}
                className={
                  "btn btn-primary form-control hover-is-no shadow-none fw-bold"
                }
                icon={<i className="bi bi-arrow-right"></i>}
                disabled={
                  inputPasswordHandler === "" || inputEmailHandler === ""
                }
              />
              <br />
              <br />
              <p className="text-primary text-center text-muted">
                <Link
                  to={"/register"}
                  style={{ textDecoration: "none" }}
                  className="label"
                >
                  Don't have an account?Sign Up
                </Link>
              </p>
              <br />
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
