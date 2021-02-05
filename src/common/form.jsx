import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = {};

  renderInput(name, label, type = "text") {
    return <Input type={type} name={name} label={label} />;
  }

  renderButton(label = "") {
    return <button className="btn btn-primary">{label}</button>;
  }
}

export default Form;
