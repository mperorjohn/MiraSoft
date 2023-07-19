import React from "react";
import Label from "../components/Label";
import LabelAstrisk from "../components/LabelAstrisk";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";

const Register = (props) => {
  const {} = props;
  //  State Definition
  const [firstName, setFirstName] = useState("");

  const [staffId, setStaffId] = useState("");

  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle inpute file change

  const HandleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const HandleStaffIdChange = (e) => {
    setStaffId(e.target.value);
  };

  const HandleProfilePictureChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setProfilePicture(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div
      className="container"
      style={{
        marginTop: "",
        padding: "30px",
      }}
    >
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 ">
          <h2
            className=" text-center"
            style={{
              color: "white",
              padding: "10px",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
              backgroundColor: "#8BB715",
            }}
          >
            Staff Profile
          </h2>
          {profilePicture && (
            <div className="displayProfilePic">
              <img
                src={profilePicture}
                alt=""
                style={{
                  height: "180px",
                  width: "180px",
                  backgroundColor: "#8BB715",
                  borderRadius: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
              />
            </div>
          )}
          <form
            action=""
            className=""
            style={{
              padding: "30px",
            }}
          >
            <hr />
            <div className="row FirstLast">
              {/* Row for first and last name */}
              <div className="col-md-6">
                <LabelAstrisk text={"First name"} className={"label fw-bold"} />
                <Input
                  type={"text"}
                  className={"form form-control shadow-none input"}
                  onChange={HandleFirstNameChange}
                />
              </div>
              <div className="col-md-6">
                <LabelAstrisk text={"Last name"} className={"label fw-bold"} />
                <Input
                  type={"text"}
                  className="form form-control shadow-none input"
                />
              </div>
              {/* Ending row for first and last name  */}
              <br />
            </div>
            {/* Row for Email and phone*/}
            <div className="row EmailPhone">
              <div className="col-md-6">
                <LabelAstrisk text={"Email"} className={"label fw-bold"} />
                <Input
                  type={"tel"}
                  className={"form form-control shadow-none input"}
                  placeholder={"Example@gmail.com"}
                />
              </div>
              <div className="col-md-6">
                <Label text={"Phone"} className={"label fw-bold"} />
                <Input
                  type={"tel"}
                  className={"form form-control shadow-none input"}
                />
              </div>
            </div>
            {/* End point for  email and phone*/}
            <div className="row">
              <div className="col-md-6">
                <LabelAstrisk text={"Gender"} className={"label fw-bold"} />
                <select
                  name="gender"
                  id="gender"
                  className={"form form-control shadow-none input"}
                >
                  <option value="male" className="label">
                    Male
                  </option>
                  <option value="female" className="label">
                    Female
                  </option>
                  <option value="others" className="label">
                    Others
                  </option>
                </select>
              </div>
              <div className="col-md-6">
                <LabelAstrisk
                  text={"Given Staff ID"}
                  className={"label fw-bold"}
                />
                <Input
                  type={"tel"}
                  className={"form form-control shadow-none input"}
                  onChange={HandleStaffIdChange}
                />
              </div>
            </div>
            {/* End point for Gender and staff id */}
            {/* Row for Department and job type */}
            <div className="row">
              <div className="col-md-6">
                <LabelAstrisk text={"Department"} className={"label fw-bold"} />
                <select
                  name="Department"
                  id="Department"
                  className={"form form-control label shadow-none input"}
                >
                  <option className="label" value="Engineering">
                    Software Engineering
                  </option>
                  <option value="Designing">Designing</option>
                  <option value="Quality Assurance">Quality Control</option>
                  <option value="Manager">Project Management</option>
                </select>
              </div>
              <div className="col-md-6">
                <LabelAstrisk text={"Job type"} className={"label fw-bold"} />
                <select
                  name="jobType"
                  id="jobType"
                  className={"form form-control label shadow-none input"}
                >
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            {/* End point for department and job type */}

            <LabelAstrisk
              text={"Profile Picture"}
              className={"label fw-bold"}
            />
            <Input
              type={"file"}
              className={"form form-control shadow-none input"}
              onChange={HandleProfilePictureChange}
            />
            <br />

            <Button
              type={"submit"}
              text={"Register"}
              className={"btn btn-primary form-control shadow-none fw-bold"}
              disabled={
                firstName === "" || staffId === "" || profilePicture === null
              }
            />
          </form>
          <p
            className=" text-center text-muted"
            style={{
              color: "white",
              padding: "10px",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "30px",
              backgroundColor: "#6D6D6D",
            }}
          >
            Copyright MiraSoft @ 2010
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Register;
