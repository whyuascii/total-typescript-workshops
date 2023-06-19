import { Equal, Expect } from "../helpers/type-utils";

// Learning about indexed access types with an array
const fruits = ["apple", "banana", "orange"] as const;

type AppleOrBanana = (typeof fruits)[0 | 1];
type Fruit = (typeof fruits)[number];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>
];
