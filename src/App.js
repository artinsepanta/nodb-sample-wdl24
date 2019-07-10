import React, { Component } from "react";
import Header from "./components/Header";
import WishList from "./components/WishList";
import NewWish from "./components/NewWish";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "wishes"
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    return (
      <div>
        <Header />
        <nav>
          <button
            onClick={() => {
              this.setState({ view: "wishes" });
            }}
          >
            wishes
          </button>
          <button
            onClick={() => {
              this.setState({ view: "new" });
            }}
          >
            +
          </button>
          <button>memories</button>
        </nav>
        {this.state.view === "wishes" ? <WishList /> : null}
        {this.state.view === "new" && <NewWish changeView={this.changeView} />}
      </div>
    );
  }
}

export default App;
