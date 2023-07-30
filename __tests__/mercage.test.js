import mAge from '../js/mercage.js';

const mercuryAge = mAge(1.2);

test("should return the correct message for mercury age", () => {
  expect(mercuryAge).toBe("Oh you are originally from Mecury! True age is 1.2?!");
});