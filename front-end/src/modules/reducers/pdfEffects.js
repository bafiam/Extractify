import axios from 'axios';
import { BASE_URL } from '../actions/actionTypes';
import { AddPfdSuccess, AddPfdError, GetPfdSuccess } from '../actions/actions';

const Addpdf = data => dispatch => {
  data.forEach(file => {
    const formData = new FormData();
    formData.append('file', file);
    const url = `${BASE_URL}/upload`;
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config)
      .then(res => {
        if (res.data.status === 'SUCCESS') {
          dispatch(AddPfdSuccess(res.data));
        }
        if (res.data.status === 'FAIL') {
          dispatch(AddPfdError(res.data));
        }
      })

      .catch(err => {
        dispatch(AddPfdError(err.message));
      });
  });
};
const Getpdfs = () => dispatch => {
  const url = `${BASE_URL}/upload`;
  axios.get(url)
    .then(res => {
      if (res.data.status === 'SUCCESS') {
        dispatch(GetPfdSuccess(res.data.file));
      }
    })
    .catch(() => {
    // handle error
      // console.log(error);
    });
};
export { Addpdf, Getpdfs };
