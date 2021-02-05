import React from "react";
import { PageHeader, Form } from "../common";

class Signup extends Form {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText={"Signup for GreenLeaf App"} />
        <div className="row text-center">
          <div className="col-12">
            <p>You can open a new account for free</p>
          </div>
        </div>

        {this.renderInput("username", "User name")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("email", "Email", "email")}
        {this.renderButton("submit")}
      </div>
    );
  }
}

export default Signup;
