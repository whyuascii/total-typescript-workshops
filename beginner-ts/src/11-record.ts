import { expect, it } from "vitest";

// This is how i would do it for real world code
interface Cache {
  [id: string]: string;
}

// but this code this is fine but not very readable
const createCache = () => {
  const cache: {
    [id: string]: string;
  } = {};
  /**
   * This would be my other option before above
   * const cache:Record<string, string> = {};
   */
  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
