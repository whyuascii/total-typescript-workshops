import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

// This one was a hard onebut probably over complicated
type ExtractPathParams<Path extends string> =
  Path extends `${infer _Prefix}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof ExtractPathParams<Rest>]: string }
    : Path extends `${infer _Prefix}:${infer Param}`
    ? { [K in Param]: string }
    : {};

// Matt Pocock's solution
type ExtractPathParams2<TPath extends string> = {
  [K in S.Split<TPath, "/">[number] as K extends `:${infer Param}`
    ? Param
    : never]: string;
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
