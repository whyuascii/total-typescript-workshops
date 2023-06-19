import { Equal, Expect } from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";
// Learning about using Extract utility type with a template literal type
// kind of like a regex
type DynamicRoutes = Extract<Routes, `${string}:${string}`>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
