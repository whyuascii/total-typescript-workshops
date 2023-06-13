interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  //   Union types
  role: "admin" | "user" | "super-admin";
}

// Alternative because in real world you may need to use that type in multiple places
// type Role = "admin" | "user" | "super-admin";
/**
 * interface User {
 *  id: number;
 *  firstName: string;
 *  lastName: string;
 *  role: Role;
 * }
 */

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
