import Age from '../js/age.js';

const myAge = Age(5);

test("should return the correct message for age", () => {
  expect(myAge).toBe("Oh, so you are 5 years old in Earth time! Correct?");
});

