import jAge from '../js/jupage.js';

const jupiterAge = jAge(3.1);

test("should return the correct message for jupiter age", () => {
  expect(jupiterAge).toBe("Oh you are originally from Jupiter! True age is 1.2?!");
});