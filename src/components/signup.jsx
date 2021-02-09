import React from "react";
import { PageHeader, Form } from "../common";
import Joi from "joi-browser";
import httpService from "../services/httpService";
import { apiUrl } from "../config.json";

class Signup extends Form {
  state = {
    formData: {
      name: "",
      password: "",
      email: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().min(5),
    password: Joi.string().required().min(6),
    name: Joi.string().required().min(2),
  };

  async doSubmit() {
    let { errors, formData } = this.state;
    const body = { ...formData, biz: false };

    try {
      const res = await httpService.post(`${apiUrl}/users`, body);
      console.log(res);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.response);
        errors = { name: "", password: "", email: "" };
        errors[error.response.data.split('"')[1]] = error.response.data;

        this.setState({ errors, formData });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <PageHeader titleText={"Signup for GreenLeaf App"} />
        <div className="row text-center">
          <div className="col-12">
            <p>You can open a new account for free</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <form onSubmit={this.handleSubmit} noValidate>
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("submit")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
