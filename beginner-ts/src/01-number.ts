import { expect, it } from "vitest";
// Simply adding type to the function parameters
// Add type annotations to the function arguments
export const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
