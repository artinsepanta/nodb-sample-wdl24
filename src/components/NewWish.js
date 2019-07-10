import React, { Component } from "react";
import axios from "axios";

export default class NewWish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      image: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!this.state.image) {
            this.setState({ error: "Please insert an image" });
          } else {
            axios
              .post("/api/wishes", {
                name: this.state.country,
                image: this.state.image
              })
              .then(response => {
                this.props.changeView("wishes");
              })
              .catch(error => {
                console.log(error);
                this.setState({
                  error: "An error occurred, please try again."
                });
              });
          }
        }}
      >
        <input
          name="country"
          placeholder="Country"
          onChange={this.handleChange}
          value={this.state.country}
        />
        <input
          name="image"
          placeholder="Image"
          onChange={this.handleChange}
          value={this.state.image}
        />
        <button type="reset">Cancel</button>
        <button type="submit">Submit</button>
        {this.state.error ? <p>{this.state.error}</p> : null}
      </form>
    );
  }
}
