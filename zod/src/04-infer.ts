// CODE

import { z } from "zod";

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
});

// I always forget infer but below in the function is one way the other is to do
//  type StarWarsPeopleResultsType = z.infer<typeof StarWarsPeopleResults>
// The above is a great way if we have a models folder with a bunch of zod schemas
const logStarWarsPeopleResults = (
  data: z.infer<typeof StarWarsPeopleResults>
) => {
  //                                    ^ 🕵️‍♂️
  data.results.map((person) => {
    console.log(person.name);
  });
};
