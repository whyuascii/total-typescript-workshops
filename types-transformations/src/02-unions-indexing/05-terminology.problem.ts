/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */
// this is a discriminated union
/**
 * Discriminated union type
 * A discriminated union type differentiates the type from each other via a property called discriminator. The power of
 * discriminated type is that the additional type checking is enforced at compile time and also carries the type info
 * into run time.
 *
 * https://dev.to/anttispitkanen/using-discriminated-union-types-in-typescript-2co6
 */
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

// This is a union
type B = "a" | "b" | "c";
// this is an enum
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
