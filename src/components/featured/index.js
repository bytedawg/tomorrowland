import React from "react";
import ImageSlider from "./imageSlider";
import TimeUntil from "./timeUntil";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <ImageSlider />
      <div className="artist_name">
        <div className="wrapper">TomorrowLand</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;
