import Joi from "joi-browser";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, PageHeader } from "../common";
import cardsService from "../services/cardsService";

class EditCard extends Form {
  state = {
    formData: {
      _id: "",
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
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

  async componentDidMount() {
    try {
      const { data } = await cardsService.getCard(this.props.match.params.id);
      this.setState({ formData: this.mapToState(data) });
    } catch (error) {
      console.error(error);
    }
  }

  mapToState(card) {
    const { bizName, bizDescription, bizAddress, bizPhone, bizImage, _id } = card;
    return { bizName, bizDescription, bizAddress, bizPhone, bizImage, _id };
  }

  doSubmit = async () => {
    const { bizImage, ...data } = this.state.formData;

    if (bizImage) {
      data.bizImage = bizImage;
    }

    await cardsService.editCard(data);

    toast.success("Card was updated", {
      position: "top-center",
      autoClose: 2500,
    });
    this.props.history.replace("/my-cards");
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText={"Edit card"} />
        <div className="row text-center">
          <div className="col-12">
            <p>Edit business card</p>
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

              <div className="text-center mx-5 my-3">
                <Link className="btn btn-block btn-danger" to="/my-cards">
                  Cancel
                </Link>
              </div>

              {this.renderButton("Update Card")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditCard;
