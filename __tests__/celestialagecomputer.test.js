const { planetConversionFactors, calculatePlanetAge, main } = require('../src/js/celestialagecomputer.js');

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

global.prompt = () => '30';

describe('main', () => {
  let originalLog;

  beforeEach(() => {
    originalLog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalLog;
  });

  it('prints age on different planets correctly', () => {
    main();

    const expectedPlanetAges = calculatePlanetAge(30);

    expect(console.log).toHaveBeenCalledWith(`Your age on different planets:`);
    for (const planet in expectedPlanetAges) {
      expect(console.log).toHaveBeenCalledWith(`${planet}: ${expectedPlanetAges[planet]} years`);
    }
  });

  it('handles invalid input', () => {
    global.prompt = () => 'invalid';

    main();

    expect(console.log).toHaveBeenCalledWith(`Invalid input. Please enter a valid number.`);
  });
});
