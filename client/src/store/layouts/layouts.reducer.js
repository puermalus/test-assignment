import {
  FETCH_LAYOUTS_BEGIN,
  FETCH_LAYOUTS_SUCCESS,
  FETCH_LAYOUTS_FAIL
} from "./layouts.action";

const initialState = {
  isLoading: false,
  error: "",
  header: {}
}

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAYOUTS_BEGIN:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_LAYOUTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        header: action.payload
      }
    case FETCH_LAYOUTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
};

export default layoutReducer;