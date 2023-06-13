// CODE

import { expect, it } from "vitest";
import { z } from "zod";

interface MenuItemType {
  link: string;
  label: string;
  children?: MenuItemType[];
}

const MenuItem: z.ZodType<MenuItemType> = z.lazy(() =>
  z.object({
    link: z.string(),
    label: z.string(),
    children: z.array(MenuItem).default([]),
  })
);

// This is pretty huge and something new. This allows for circular references
// .lazy allows you to defer the evaluation of a type until it is needed.

// TESTS

it("Should succeed when it encounters a correct structure", async () => {
  const menuItem = {
    link: "/",
    label: "Home",
    children: [
      {
        link: "/somewhere",
        label: "Somewhere",
        children: [],
      },
    ],
  };
  expect(MenuItem.parse(menuItem)).toEqual(menuItem);
});

it("Should error when it encounters an incorrect structure", async () => {
  const menuItem = {
    children: [
      {
        link: "/somewhere",
        label: "Somewhere",
        children: [],
      },
    ],
  };
  expect(() => MenuItem.parse(menuItem)).toThrowError();
});
