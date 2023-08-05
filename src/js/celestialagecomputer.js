const planetConversionFactors = {
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
};

function calculatePlanetAge(earthAge) {
  const planetAges = {};

  for (const planet in planetConversionFactors) {
    planetAges[planet] = (earthAge / planetConversionFactors[planet]).toFixed(2);
  }

  return planetAges;
}

function main() {
  const earthAge = parseFloat(prompt("Enter your age in Earth years:"));

  if (isNaN(earthAge)) {
    console.log("Invalid input. Please enter a valid number.");
    return;
  }

  const planetAges = calculatePlanetAge(earthAge);

  console.log(`Your age on different planets:`);
  for (const planet in planetAges) {
    console.log(`${planet}: ${planetAges[planet]} years`);
  }
}

module.exports = {
  planetConversionFactors,
  calculatePlanetAge,
  main 
};