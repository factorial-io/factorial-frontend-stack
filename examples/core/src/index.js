import { format } from "date-fns";
import { square, merge } from "./lib/math";
import "./index.css"; // starts CSS dependency chain

const s = square(2);

console.log(s); // eslint-disable-line
console.log(merge([1, 2, 3], [4, 5, 6])); // eslint-disable-line
console.log(format(new Date(), 'd.m.Y')); // eslint-disable-line

// Test if window object is considerer global
console.log(window); // eslint-disable-line no-console
