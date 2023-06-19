import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };
// Learning about Extract utility type with a discriminated union
type ClickEvent = Extract<Event, { type: "click" }>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
