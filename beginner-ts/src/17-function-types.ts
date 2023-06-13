import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */

// Done a lot in React; this can be inline or as a type

const addListener = (onFocusChange: (onFocusChange: boolean) => void) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
