import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../common/pageHeader";

class MyCards extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText={`About GreenLeaf App`} />
        <div className="row">
          <div className="col-12 text-center">
            <p>Your cards are in the list below</p>
            <Link to="/create-card">Create a new card</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCards;
