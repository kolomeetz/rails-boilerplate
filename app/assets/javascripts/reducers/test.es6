import {
  MAKE_TEST_TRUE,
  MAKE_TEST_FALSE
} from '../actions/test.es6'

const initialState = {
  test: true
};

export function test(state = initialState, action) {
  switch (action.type) {
    case MAKE_TEST_TRUE:
      return makeTestTrue();
    case MAKE_TEST_FALSE:
      return makeTestFalse();

    default:
      return state;
  }
}

function makeTestTrue(state) {
  return Object.assign({}, state, {
    test: true
  })
}

function makeTestFalse(state) {
  return Object.assign({}, state, {
    test: false
  })
}
