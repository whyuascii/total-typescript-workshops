import { Equal, Expect } from "../helpers/type-utils";

const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

// Learning about getting all values from an object
type BackendModuleEnum = typeof frontendToBackendEnumMap[keyof typeof frontendToBackendEnumMap];

type tests = [
  Expect<
    Equal<BackendModuleEnum, "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE">
  >,
];
