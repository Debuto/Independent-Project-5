class Planet {
  constructor(name, conversionFactor) {
    this.name = name;
    this.conversionFactor = conversionFactor;
  }

  calculateAge(earthAge) {
    return (earthAge / this.conversionFactor).toFixed(2);
  }

  calculateAgePast(earthAge, earthAgePast) {
    return ((earthAge / this.conversionFactor) - (earthAgePast / this.conversionFactor)).toFixed(2);
  }
}

class AgeCalculator {
  constructor() {
    this.planets = [
      new Planet("Mercury", 0.24),
      new Planet("Venus", 0.62),
      new Planet("Mars", 1.88),
      new Planet("Jupiter", 11.86)
    ];
  }
  
  calculatePlanetAges(earthAge) {
    const planetAges = {};
    this.planets.forEach(planet => {
      planetAges[planet.name] = planet.calculateAge(earthAge);
    });
    return planetAges;
  }

  pastYears(earthAge, earthAgePast){
    const planetAges = {};
    this.planets.forEach(planet => {
      planetAges[planet.name] = planet.calculateAgePast(earthAge, earthAgePast)
    });
    return planetAges;
  }
}

module.exports = {
  Planet,
  AgeCalculator
};