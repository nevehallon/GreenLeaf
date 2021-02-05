import React from "react";
import { PageHeader, Form } from "../common";
import Joi from "joi-browser";
class Signup extends Form {
  state = {
    formData: {
      username: "",
      password: "",
      email: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().min(6),
    email: Joi.string().required().min(8).email(),
    password: Joi.string().required(),
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText={"Signup for GreenLeaf App"} />
        <div className="row text-center">
          <div className="col-12">
            <p>You can open a new account for free</p>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} noValidate>
          {this.renderInput("username", "User name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("email", "Email", "email")}
          {this.renderButton("submit")}
        </form>
      </div>
    );
  }
}

export default Signup;
