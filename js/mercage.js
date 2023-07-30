import age from "./age.js";

export default function mAge() {
  var pf = parseFloat(age());
  var mercAge = pf * 0.24;
  return "Oh you are originally from Mecury! True age is " + 
  mercAge.toFixed(2) + "?!";
}


