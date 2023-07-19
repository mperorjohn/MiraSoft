import LabelAstrisk from "../components/LabelAstrisk";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";
import TextArea from "../components/TextArea";
import Img from "../components/Img";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons";
const Contact = () => {
  //  State definition
  const [staffId, setStaffId] = useState("");

  const [textMessage, setTextMessage] = useState("");

  // Function to handle changes
  const HandleStaffIdChange = (e) => {
    setStaffId(e.target.value);
  };

  const HandleTextMessageChange = (e) => {
    setTextMessage(e.target.value);
    console.log(textMessage);
  };
  return (
    <div className="container" style={{ padding: "70px" }}>
      <div className="row " style={{ marginTop: "" }}>
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
            <h3 className="text-primary text-muted text-center">
              Message to Board of Directors
            </h3>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <Label text={"Email or phone"} className={"label fw-bold"} />
                <Input
                  type={"email"}
                  className={"form form-control shadow-none input"}
                  placeholder={"Mperorjohnoyekola@gmail.com"}
                  required={"required"}
                  style={{ border: "#8BB715" }}
                />
              </div>
              <div className="col-md-6">
                <LabelAstrisk text={"Staff ID"} className={"label fw-bold"} />
                <Input
                  type={"tel"}
                  className={"form form-control shadow-none input"}
                  onChange={HandleStaffIdChange}
                />
              </div>
            </div>
            <LabelAstrisk text={"Department"} className={"label fw-bold"} />
            <select
              className="form form-control shadow-none input"
              name="department"
              id="department"
            >
              <option className="form form-control" value="Engineering">
                Software Engineering
              </option>
              <option value="Designing">Designing</option>
              <option value="Quality Assurance">Quality Control</option>
              <option value="Manager">Project Management</option>
            </select>
            <br />
            <LabelAstrisk text={"Your Message"} className={"label fw-bold"} />
            <TextArea
              cols={"20"}
              rows={"6"}
              className={"form form-control shadow-none"}
              onChange={HandleTextMessageChange}
            />
            <br />
            <Button
              text={"Send message"}
              className={"btn btn-primary form-control fw-bold shadow-none"}
              disabled={textMessage === "" || staffId === ""}
              type={"submit"}
            />
          </form>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default Contact;

<br />;
