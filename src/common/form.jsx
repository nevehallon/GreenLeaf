import Joi from "joi-browser";
import React, { Component } from "react";
import { Input } from "./";

class Form extends Component {
  doSubmit() {
    console.log("Submit successful");
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });

    if (!errors) this.doSubmit();
  };

  validateProperty = (name, value) => {
    const schema = { [name]: this.schema[name] };
    const obj = { [name]: value };

    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const {
      state: { formData },
      schema,
    } = this;

    const { error } = Joi.validate(formData, schema, {
      abortEarly: false,
    });

    if (!error) return null;

    const errors = {};

    for (const { path, message } of error.details) {
      errors[path[0]] = message;
    }

    return errors;
  };

  handleChange = ({ target: { value, name } }) => {
    const { errors, formData } = this.state;

    //validate input
    const errorsCopy = { ...errors } || {};
    const errorMessage = this.validateProperty(name, value);

    // if (errorMessage) {
    errorsCopy[name] = errorMessage;
    // } else {
    //   delete errorsCopy[name];
    // }

    //formData
    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    // update state
    this.setState({ formData: updatedFormData, errors: errorsCopy });
  };

  renderInput(name, label, type = "text") {
    const { formData, errors } = this.state;
    return (
      <Input
        error={errors && errors[name]}
        onChange={this.handleChange}
        type={type}
        name={name}
        label={label}
        value={formData[name]}
      />
    );
  }

  renderButton(label = "") {
    return (
      <div className="text-center">
        <button disabled={this.validate()} className="btn btn-block btn-primary">
          {label}
        </button>
      </div>
    );
  }
}

export default Form;
