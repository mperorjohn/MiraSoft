import React from "react";
// import "./App.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" softwareProvider text-center bg-primary">
        <div className="softText">
          <h1>
            Global <span>tech solution</span> provider
          </h1>
          <p className="text-white text-justify ">The future is now...</p>
          <Link to={"about"}>
            <Button
              text={"Learn More"}
              className={" learnMore text-white fw-bold"}
            />
          </Link>
        </div>
      </div>
      <div className="services">
        <span>Services</span>
      </div>
      <div className="container" style={{ padding: "20px" }}>
        <div className="row">
          <div className="col-md-3">
            <div className="card homecards">
              <div className="card-body ">
                <h3>Web Application</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit, ratione.
                </p>
                <Button
                  text={"Read more"}
                  className={"btn btn-primary fw-bold ReadMore"}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card homecards">
              <div className="card-body ">
                <h3>Mobile Application</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit, ratione.
                </p>
                <Button
                  text={"Read more"}
                  className={"btn btn-primary fw-bold  ReadMore"}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card homecards ">
              <div className="card-body">
                <h3>Graphic Design</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit, ratione.
                </p>
                <Button
                  text={"Read more"}
                  className={"btn btn-primary fw-bold ReadMoreBreak"}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card homecards ">
              <div className="card-body">
                <h3>Website</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit, ratione.
                </p>
                <Button
                  text={"Read more"}
                  className={"btn btn-primary fw-bold ReadMoreBreak "}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card homecards ">
              <div className="card-body">
                <h3>Game Development</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit, ratione.
                </p>
                <Button
                  text={"Read more"}
                  className={"btn btn-primary fw-bold ReadMore"}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card homecards ">
              <div className="card-body">
                <h3>Product Design</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit, ratione.
                </p>
                <Button
                  text={"Read more"}
                  className={"btn btn-primary fw-bold ReadMoreBreak"}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card homecards ">
              <div className="card-body">
                <h3>Application Maintanance</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit, ratione.
                </p>
                <Button
                  text={"Read more"}
                  className={"btn btn-primary fw-bold ReadMore"}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card homecards ">
              <div className="card-body">
                <h3>UI/UX Design</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit, ratione.
                </p>
                <Button
                  text={"Read more"}
                  className={"btn btn-primary fw-bold ReadMoreBreak"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
