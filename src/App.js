import React from "react";
import Header from "./components/Header";
import WishList from "./components/WishList";

function App() {
  return (
    <div>
      <Header />
      <nav>
        <button>wishes</button>
        <button>+</button>
        <button>memories</button>
      </nav>
      <WishList />
    </div>
  );
}

export default App;
