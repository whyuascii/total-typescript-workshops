import { Equal, Expect } from "../helpers/type-utils";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => {};
/**
 * Below is a solution but horrible.
 */
// type MakeQueryParameters = typeof makeQuery extends (...args: infer P) => any
//   ? P
//   : never;

// USE Type Utility Parameters does tge same thing.
type MakeQueryParameters = Parameters<typeof makeQuery>;

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        }
      ]
    >
  >
];
