const { Planet, AgeCalculator } = require('../src/js/classC_Age_PC');

describe('Planet', () => {
  describe('constructor()', () => {
    it('should create a Planet object with name and conversionFactor properties', () => {
      const myPlanetObject = new Planet("Mars", 1.88)
      expect(myPlanetObject.name).toEqual("Mars")
      expect(myPlanetObject.conversionFactor).toEqual(1.88)
    })
  })

  describe('calculateAge()', () => {
    it('should correctly calculate age for Mercury', () => {
      const mercury = new Planet('Mercury', 0.24);
      expect(mercury.calculateAge(100)).toBe('416.67');
    });

    it('should correctly calculate age for Venus', () => {
      const venus = new Planet('Venus', 0.62);
      expect(venus.calculateAge(100)).toBe('161.29');
    });

    it('should correctly calculate age for Mars', () => {
      const mars = new Planet('Mars', 1.88);
      expect(mars.calculateAge(100)).toBe('53.19');
    });

    it('should correctly calculate age for Jupiter', () => {
      const jupiter = new Planet('Jupiter', 11.86);
      expect(jupiter.calculateAge(100)).toBe('8.43');
    });
  });
});

describe('AgeCalculator', () => {
  describe('constructor()', () => {
    it('should create AgeCalculator objects with a "planets" property.', () => {
      const myAgeCalculator = new AgeCalculator();
      expect(myAgeCalculator.planets[0].name).toEqual("Mercury")
      expect(myAgeCalculator.planets[0].conversionFactor).toEqual(.24)
    })
  })

  describe('calculatePlanetAges()', () => {
    it('should correctly calculate ages for all planets', () => {
      const ageCalculator = new AgeCalculator();
      const planetAges = ageCalculator.calculatePlanetAges(100);
      expect(planetAges).toEqual({
        Mercury: '416.67',
        Venus: '161.29',
        Mars: '53.19',
        Jupiter: '8.43',
      });
    });

    describe('pastYears()', () => {
      it("should return the difference in years between a past age and the present age for all planets", () => {
        const ageCalculator = new AgeCalculator();
        const planetAges = ageCalculator.pastYears(100, 90);
        expect(planetAges).toEqual({
          Mercury: '41.66',
          Venus: '16.13',
          Mars: '5.32',
          Jupiter: '.84',
        });
      })
    })
  })
 
});
