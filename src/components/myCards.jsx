import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../common/card";
import PageHeader from "../common/pageHeader";
import cardsService from "../services/cardsService";

class MyCards extends Component {
  state = {
    cards: [],
  };

  async getData() {
    try {
      const { data } = await cardsService.getMyCards();

      data.length ? this.setState({ cards: data }) : this.setState({ cards: [] });
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    this.getData();
  }

  handleDeleteCard = async (id) => {
    try {
      await cardsService.deleteCard(id);
      this.getData();
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { cards } = this.state;

    return (
      <div className="container">
        <PageHeader titleText={`Card Collection`} />
        <div className="row">
          <div className="col-12 text-center">
            <p>Your cards are in the list below</p>

            <div className="row">
              {cards.length ? (
                cards.map((card) => (
                  <Card onDelete={() => this.handleDeleteCard(card._id)} card={card} key={card._id} />
                ))
              ) : (
                <div className=" mx-auto">No cards yet...</div>
              )}
            </div>
            <Link className="btn btn-info mt-2" to="/create-card">
              Create a new card
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCards;
