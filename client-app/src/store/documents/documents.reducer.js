import {
  FETCH_DOCUMENTS_BEGIN,
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_DOCUMENTS_FAIL
} from "./documents.action";

const initialState = {
  isLoading: false,
  error: "",
  schema: {}
}

const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCUMENTS_BEGIN:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_DOCUMENTS_SUCCESS:
      const fields = { "fields": [...action.payload]};
      return {
        ...state,
        isLoading: false,
        schema: fields
      }
    case FETCH_DOCUMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
};

export default documentReducer;