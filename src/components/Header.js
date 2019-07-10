import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <h2>
        <span role="img" aria-label="globetrotter">
          🌍
        </span>
      </h2>
      <h1>globetrotter</h1>
    </header>
  );
}
