import { Equal, Expect } from "../helpers/type-utils";

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;
// Learning about Template Literal Types in object keys. This is a very useful feature of TS.
type ObjectOfKeys = {
  [K in TemplateLiteralKey]: string;
};
// Better solution is
// type ObjectOfKeys = Record<TemplateLiteralKey, string>;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >
];
