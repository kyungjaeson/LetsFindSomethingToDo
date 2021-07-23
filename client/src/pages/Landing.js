import'./style.css'
import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="rootContainer container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h1>
              <span style={{ fontFamily: "Arial" }}>Let's Find Something To Do </span> 
            </h1>
            <p className="flow-text grey-text text-darken-1">
              Nearby Events: Your Time, Your Place
            </p>
            <br />
            <div className="col s6">

              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable green accent-3"
              >
                Register
              </Link>

            </div>
            <div className="col s6">

              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable yellow accent-4"
              >
                Log In
              </Link>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;