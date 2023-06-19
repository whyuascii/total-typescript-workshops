import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
// This uses the ReturnType utility type
type MyFuncReturn = ReturnType <typeof myFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
