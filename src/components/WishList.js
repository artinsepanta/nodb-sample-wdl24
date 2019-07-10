import React, { Component } from "react";

export default class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishes: [
        {
          name: "Germany",
          image:
            "https://1dib1q3k1s3e11a5av3bhlnb-wpengine.netdna-ssl.com/wp-content/uploads/2013/04/cochem-town-germany.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <ul>
        {this.state.wishes.map(wish => (
          <li className="wish-item" key={wish.name}>
            <img className="wish-image" src={wish.image} alt={wish.name} />
            <h3>{wish.name}</h3>
          </li>
        ))}
      </ul>
    );
  }
}
