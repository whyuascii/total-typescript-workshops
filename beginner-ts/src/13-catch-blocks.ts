import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    // One solution is do a conditional check if (e instanceof Error) { return e.message } this can be great for multiple error types
    // Not the biggest fan of this solution but its an easy W
    return (e as Error).message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
