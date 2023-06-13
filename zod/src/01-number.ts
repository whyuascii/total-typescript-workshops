// CODE

import { expect, it } from "vitest";
import { z } from "zod";
//       ^ 🕵️‍♂️

const numberParser = z.number();

// Nice warmup needed to create a parser and then parse it in the function
export const toString = (num: unknown) => {
  const parsed = numberParser.parse(num);
  return String(parsed);
};

// TESTS

it("Should throw a runtime error when called with not a number", () => {
  expect(() => toString("123")).toThrowError(
    "Expected number, received string"
  );
});

it("Should return a string when called with a number", () => {
  expect(toString(1)).toBeTypeOf("string");
});
