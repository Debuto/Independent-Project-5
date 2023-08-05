const { Planet, AgeCalculator } = require('../src/js/classC_Age_PC');

describe('Planet and AgeCalculator', () => {
  describe('Planet class', () => {
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

  describe('AgeCalculator class', () => {
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
  });
});
