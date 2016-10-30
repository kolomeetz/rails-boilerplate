export const MAKE_TEST_TRUE = "MAKE TEST TRUE";
export const MAKE_TEST_FALSE = "MAKE TEST FALSE";

export function makeTakeTrue() {
  return {
    type: MAKE_TEST_TRUE
  }
}

export function makeTestFalse() {
  return {
    type: MAKE_TEST_FALSE
  }
}
