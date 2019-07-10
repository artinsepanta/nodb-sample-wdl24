import React, { Component } from "react";
import axios from "axios";
import WishItem from "./WishItem";

export default class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishes: [],
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/wishes")
      .then(response => {
        this.setState({ wishes: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "An unknown error occurred. DON'T TRY AGAIN!!!"
        });
      });
  }

  updateWishes = newWishes => {
    this.setState({ wishes: newWishes });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.wishes.map(wish => (
            <WishItem
              updateWishes={this.updateWishes}
              name={wish.name}
              image={wish.image}
              key={wish.name}
            />
          ))}
        </ul>
        <p>{this.state.error}</p>
      </>
    );
  }
}
