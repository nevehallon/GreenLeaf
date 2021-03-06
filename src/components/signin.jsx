import Joi from "joi-browser";
import { PageHeader, Form } from "../common";
import { toast } from "react-toastify";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";

class Signin extends Form {
  state = {
    formData: {
      password: "",
      email: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().min(5).label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  componentDidMount() {
    if (userService.getCurrentUser()) return;
    localStorage.clear();
  }

  doSubmit = async () => {
    let { errors, formData } = this.state;

    try {
      await userService.login(formData);
      setTimeout(() => {
        window.location = "/";
      }, 2200);
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
  };

  render() {
    if (userService.getCurrentUser()) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <PageHeader titleText={"Sign in with your GreenLeaf account"} />
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
              {this.renderButton("Sign In")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
