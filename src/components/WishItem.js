import React, { Component } from "react";
import axios from "axios";

export default class WishItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: ""
    };
  }

  handleChange = e => {
    this.setState({ newName: e.target.value });
  };

  handleClick = () => {
    axios
      .put("/api/wishes/" + this.props.name, { name: this.state.newName })
      .then(response => {
        this.props.updateWishes(response.data);
      });
  };

  render() {
    return (
      <li className="wish-item">
        <img
          className="wish-image"
          src={this.props.image}
          alt={this.props.name}
        />
        <h3>{this.props.name}</h3>
        <div>
          <input
            placeholder="Change Name"
            value={this.state.newName}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Update</button>
        </div>
      </li>
    );
  }
}
