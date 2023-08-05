class Planet {
  constructor(name, conversionFactor) {
    this.name = name;
    this.conversionFactor = conversionFactor;
  }

  calculateAge(earthAge) {
    return (earthAge / this.conversionFactor).toFixed(2);
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

  displayOutput(outputText) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = outputText;
  }

  main() {
    const earthAge = parseFloat(prompt('Enter your age in Earth years:'));

    if (isNaN(earthAge)) {
      this.displayOutput('Invalid input. Please enter a valid number.');
      return;
    }

    const planetAges = this.calculatePlanetAges(earthAge);

    let outputText = 'Your age on different planets:\n';
    for (const planet in planetAges) {
      outputText += `${planet}: ${planetAges[planet]} years\n`;
    }

    this.displayOutput(outputText);
  }
}

const ageCalculator = new AgeCalculator();
ageCalculator.main();

module.exports = {
  Planet,
  AgeCalculator
};