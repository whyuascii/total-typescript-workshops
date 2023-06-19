// Might come in handy!
import { S } from "ts-toolbelt";
// https://millsp.github.io/ts-toolbelt/modules/string_split.html

import { Equal, Expect } from "../helpers/type-utils";

type Path = "Users/John/Documents/notes.txt";
// learning about Split utility type
type SplitPath = S.Split<Path, "/">;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>
];
