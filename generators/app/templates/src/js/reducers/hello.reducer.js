import { SAY_HELLO } from '../actions/actions';

export default function(state = {message: ''}, action) {
  switch (action.type) {
  case SAY_HELLO:
    return { message: action.message };
  default:
    return state;
  }
};
