import Age from '../js/age.js';

test("should return the correct message for age", () => {
  const myAge = Age(5);

  expect(myAge).toBe("Oh, so you are 5 years old in Earth time! Correct?");
});