import {
    SET_NEW_VALUE
} from '../actions';

const initialState = {
  example: 'Click to trigger action!'
};

export default function weather (state = initialState, action) {
  switch (action.type) {
    case SET_NEW_VALUE:
      return {
        ...state,
        example: action.payload
      }
    default:
      return state;
  }
}
