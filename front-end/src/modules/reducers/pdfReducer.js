import {
  ADD_PDF_ERROR, ADD_PDF_SUCCESS, GET_PDF_SUCCESS,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  pdfSaved: false,
  successResponse: '',
  errorResponse: '',

};

const AddPdfReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PDF_SUCCESS:
      return { ...state, pdfSaved: true, successResponse: 'The files were executed and saved.' };

    case ADD_PDF_ERROR:
      return { ...state, pdfSaved: false, errorResponse: 'An error occurred when executing one or more of the files.' };

    default:
      return state;
  }
};

const STATE = {
  data: [],

};
const GetPdfReducer = (state = STATE, action) => {
  switch (action.type) {
    case GET_PDF_SUCCESS:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
export { AddPdfReducer, GetPdfReducer };
