import age from "./age.js";

export default function jAge() {
  var pf = parseFloat(age());
  var jupAge = pf * 0.62;
  return "Oh you are originally from Jupiter! True age is " + 
  jupAge.toFixed(2) + "?!";
}


