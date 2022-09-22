import React from "react";
import Card from "./Card";

import './App.css';

function App() {
  return (
    <div>
      <Card
        title={"Card title"}
        text={
          " Some quick example text to build on the card title and make up the\n" +
          "          bulk of the card's content."
        }
      >
        <img
          alt={""}
          src={"https://catherineasquithgallery.com/uploads/posts/2021-03/1614637135_90-p-fon-doroga-dlya-fotoshopa-116.jpg"}
          className="card-img-top"
        />
      </Card>
      <Card
        title={"Special title treatment"}
        text={
          "With supporting text below as a natural lead-in to additional content."
        }
      />
    </div>
  );
}

export default App;
