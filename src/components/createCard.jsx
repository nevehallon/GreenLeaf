import Joi from "joi-browser";
import React from "react";
import { toast } from "react-toastify";
import { Form, PageHeader } from "../common";
import cardsService from "../services/cardsService";

class CreateCard extends Form {
  state = {
    formData: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    errors: {},
  };

  schema = {
    bizName: Joi.string().min(2).max(255).required().label("bizName"),
    bizDescription: Joi.string().min(2).max(1024).required().label("bizDescription"),
    bizAddress: Joi.string().min(2).max(400).required().label("bizAddress"),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/)
      .label("bizPhone"),
    bizImage: Joi.string().min(11).max(1024).uri().allow("").label("bizImage"),
  };

  doSubmit = async () => {
    const { bizImage, ...data } = this.state.formData;

    if (bizImage) {
      data.bizImage = bizImage;
    }

    await cardsService.createCard(data);
    toast.success("A new card was created", {
      position: "top-center",
      autoClose: 2500,
    });
    this.props.history.replace("/my-cards");
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText={"Create a business card"} />
        <div className="row text-center">
          <div className="col-12">
            <p>Lets make a new business card</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <form onSubmit={this.handleSubmit} noValidate>
              {this.renderInput("bizName", "Name")}
              {this.renderInput("bizDescription", "Description")}
              {this.renderInput("bizAddress", "Address")}
              {this.renderInput("bizPhone", "Phone")}
              {this.renderInput("bizImage", "Image URL")}
              {this.renderButton("Create Card")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCard;
