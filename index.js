import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel/index.js";
import Images from "./images";
import "./style.css";
ReactDOM.render(
  <Carousel images={Images} length={Images.length - 1} />,
  document.getElementById("root")
);
