// CODE

import { expect, it } from "vitest";
import { z } from "zod";

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
});
//                            ^ 🕵️‍♂️
// Just had to create an array of StarWarsPerson with the object key of results if we want just an array it would be
// StarWarsPerson.array()
export const fetchStarWarsPeople = async () => {
  const data = await fetch(
    "https://www.totaltypescript.com/swapi/people.json"
  ).then((res) => res.json());

  const parsedData = StarWarsPeopleResults.parse(data);

  return parsedData.results;
};

// TESTS

it("Should return the name", async () => {
  expect((await fetchStarWarsPeople())[0]).toEqual({
    name: "Luke Skywalker",
  });
});
