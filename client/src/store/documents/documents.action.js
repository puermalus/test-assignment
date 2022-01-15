export const FETCH_DOCUMENTS_BEGIN = "FETCH_DOCUMENTS_BEGIN";
export const FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS";
export const FETCH_DOCUMENTS_FAIL = "FETCH_DOCUMENTS_FAIL";

export const fetchDocumentsBegin = () => ({
  type: FETCH_DOCUMENTS_BEGIN
})

export const fetchDocumentsSuccess = (documents) => ({
  type: FETCH_DOCUMENTS_SUCCESS,
  payload: documents
})

export const fetchDocumentsFail = (message) => ({
  type: FETCH_DOCUMENTS_FAIL,
  payload: message
})

