import { expect, it } from "vitest";

// Add types to Object parameters simple interface

interface interfaceParams {
  first: number;
  second: number;
}

// Alternative is type
type Params = { first: number; second: number; };


export const addTwoNumbers = (params: Params) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
