import { expect, it } from "vitest";

// THIS IS A GREAT ONE. The only issue if using Mongo and you are expecting an object you may need to add more conditions

const coerceAmount = (amount: number | { amount: number }) => {
    if (typeof amount === "number") {
        return amount;
    }

    return amount.amount;
};

// const coerceAmount = (amount: number | { amount: number }) => {};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
