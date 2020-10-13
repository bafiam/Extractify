import { combineReducers } from 'redux';
import { AddPdfReducer, GetPdfReducer } from './reducers/pdfReducer';

const rootReducer = combineReducers({
  postPdf: AddPdfReducer,
  getPdf: GetPdfReducer,
});

export default rootReducer;
