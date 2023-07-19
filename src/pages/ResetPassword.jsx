import React from "react";
import { useState } from "react";
import Label from "../components/Label";
import LabelAstrisk from "../components/LabelAstrisk";
import Button from "../components/Button";
import Input from "../components/Input";
import Img from "../components/Img";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  //State Definition
  const [staffId, setStaffId] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle change

  const HandleStaffIdChange = (e) => {
    setStaffId(e.target.value);
  };
  const HandleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const HandleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <div className="container" style={{ padding: "30px" }}>
      <div className="row">
        <div className="col-md-3"></div>
        <div
          className="col-md-6 card"
          style={{
            marginTop: "auto",
            padding: "20px",
            boxShadow: "#8BB715 10px 5px 30px",
          }}
        >
          <form action="" className="card-body">
            <Img
              src={"./png-transparent-abstract-letter-m-logo@3x.png"}
              className={"text-center"}
              width={"160"}
              heigth={"160"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItem: " center",
                margin: "auto",
              }}
            />
            <h2 className="text-center label">Reset Password</h2>
            <hr />
            <LabelAstrisk text={"Staff ID"} className={"fw-bold label"} />
            <Input
              type={"tel"}
              className={"form form-control input shadow-none"}
              onChange={HandleStaffIdChange}
            />
            <br />
            <LabelAstrisk text={"New Password"} className={"label fw-bold"} />
            <Input
              type={"password"}
              className={"form form-control input shadow-none"}
              onChange={HandleNewPasswordChange}
            />
            <br />
            <LabelAstrisk
              text={"Confirm Password"}
              className={"fw-bold label"}
            />
            <Input
              type={"password"}
              className={"form form-control shadow-none input"}
              onChange={HandleConfirmPasswordChange}
            />
            <br />
            <div className="checkme" style={{ display: " flex" }}>
              <Input
                type={"checkbox"}
                value={"Remember me"}
                className={"input"}
              />
              <span style={{ marginLeft: " 4px" }}>Show password</span>
            </div>
            <br />
            <Button
              text={"Reset"}
              type={"submit"}
              className={"btn text-white form-control shadwo-none fw-bold"}
              disabled={
                staffId === "" || newPassword === "" || confirmPassword === ""
              }
            />
            <br />
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default ResetPassword;
