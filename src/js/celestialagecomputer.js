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

module.exports = {
  planetConversionFactors,
  calculatePlanetAge
};