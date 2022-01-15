export const SET_VALIDATE_ERROR = "SET_VALIDATE_ERROR";
export const CLEAR_VALIDATE_ERROR = "CLEAR_VALIDATE_ERROR";

export const setValidateError = (message) => ({
  type: SET_VALIDATE_ERROR,
  payload: message
})

export const clearValidateError = (message) => ({
  type: CLEAR_VALIDATE_ERROR
})