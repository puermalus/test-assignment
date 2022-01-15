export const FETCH_LAYOUTS_BEGIN = "FETCH_LAYOUTS_BEGIN";
export const FETCH_LAYOUTS_SUCCESS = "FETCH_LAYOUTS_SUCCESS";
export const FETCH_LAYOUTS_FAIL = "FETCH_LAYOUTS_FAIL";

export const fetchLayoutsBegin = () => ({
  type: FETCH_LAYOUTS_BEGIN
})

export const fetchLayoutsSuccess = (layouts) => ({
  type: FETCH_LAYOUTS_SUCCESS,
  payload: layouts
})

export const fetchLayoutsFail = (message) => ({
  type: FETCH_LAYOUTS_FAIL,
  payload: message
})

