import {
  ADD_PDF_ERROR, ADD_PDF_SUCCESS, GET_PDF_ERROR, GET_PDF_SUCCESS,
} from './actionTypes';

export const AddPfdSuccess = resObj => ({
  type: ADD_PDF_SUCCESS,
  payload: resObj,
});

export const AddPfdError = resErr => ({
  type: ADD_PDF_ERROR,
  payload: resErr,
});
export const GetPfdSuccess = resObj => ({
  type: GET_PDF_SUCCESS,
  payload: resObj,
});

export const GetPfdError = resErr => ({
  type: GET_PDF_ERROR,
  payload: resErr,
});
