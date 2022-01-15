import { SET_VALIDATE_ERROR, CLEAR_VALIDATE_ERROR } from "./validate.action"

const initialState = {
  validateMessage: ""
}

const validateReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_VALIDATE_ERROR:
      return {
        ...state,
        validateMessage: action.payload
      }
    case CLEAR_VALIDATE_ERROR:
      return {
        ...state,
        validateMessage: ""
      }
    default:
      return state
  }
}

export default validateReducer;