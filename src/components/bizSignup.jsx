import React from "react";
import { PageHeader, Form } from "../common";
import Joi from "joi-browser";
import httpService from "../services/httpService";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";

class BizSignup extends Form {
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
    const body = { ...formData, biz: true };

    try {
      await httpService.post(`${apiUrl}/users`, body);

      const { email, password } = body;
      await userService.login({ email, password });

      toast.success("You have successfully registered business account!!", {
        position: "top-center",
        autoClose: 2500,
      });

      setTimeout(() => {
        window.location = "/create-card";
      }, 2500);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data, {
          position: "top-center",
          autoClose: error.response.data.length * 65,
        });
        errors = { name: "", password: "", email: "" };
        errors[error.response.data.split('"')[1]] = error.response.data;

        this.setState({ errors, formData });
      }
    }
  }

  render() {
    if (userService.getCurrentUser()) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <PageHeader titleText={"Business Registration Form"} />
        <div className="row text-center">
          <div className="col-12">
            <p>Open a new business account</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <form onSubmit={this.handleSubmit} noValidate>
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Next")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BizSignup;
