/* eslint-disable no-console */

import { format } from "date-fns";
import { square, merge } from "./lib/math";
import "./index.css"; // starts CSS dependency chain

// import svg-sprites
import "./icons/activity-outline.svg";
import "./icons/alert-circle-outline.svg";
import "./icons/alert-triangle-outline.svg";

const s = square(2);

console.log(s);
console.log(merge([1, 2, 3], [4, 5, 6]));
console.log(format(new Date(), "d.m.Y"));

// Test if window object is set to global
console.log(window);

// Test if arrow functions get transpiled
const test = () => {
  let a = 2;
  a = 3;

  return a;
};

console.log(test());
