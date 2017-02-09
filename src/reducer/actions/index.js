export const SET_NEW_VALUE = 'SET_NEW_VALUE';

export function setNewValue () {
  return {
    type: SET_NEW_VALUE,
    payload: 'New value from action!!'
  }
}
