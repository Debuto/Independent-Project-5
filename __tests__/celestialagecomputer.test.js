const { planetConversionFactors, calculatePlanetAge } = require('../src/js/celestialagecomputer.js');

describe('calculatePlanetAge', () => {
  it('calculates age on different planets correctly', () => {
    const earthAge = 30;
    const expectedPlanetAges = {
      Mercury: (earthAge / planetConversionFactors.Mercury).toFixed(2),
      Venus: (earthAge / planetConversionFactors.Venus).toFixed(2),
      Mars: (earthAge / planetConversionFactors.Mars).toFixed(2),
      Jupiter: (earthAge / planetConversionFactors.Jupiter).toFixed(2),
    };

    const planetAges = calculatePlanetAge(earthAge);

    expect(planetAges).toEqual(expectedPlanetAges);
  });
});