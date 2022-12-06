import React from "react";
import "./Story.css";
import burger from "../../../assets/burger.jpg";

const Story = () => {
  return (
    <div className="story">
      <div className="story-text" >
        <h1>About Our Story</h1>
        <p>
          Who are in extremely love with eco friendly system. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <button className="custom-btn">VIEW FULL STORY</button>
      </div>
      <div>
        <img src={burger} alt="burger" />
      </div>
    </div>
  );
};

export default Story;
