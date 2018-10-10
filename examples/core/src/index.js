import { format } from "date-fns";
import { square, merge } from "./lib/math";
import "./index.css";

const s = square(2);

console.log(s); // eslint-disable-line
console.log(merge([1, 2, 3], [4, 5, 6])); // eslint-disable-line
console.log(format(new Date(), 'd.m.Y')); // eslint-disable-line