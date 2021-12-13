import axios from 'axios';

const api = 'http://api.alquran.cloud/v1/';

const getsuratdata = () => async (dispatch) => {
  dispatch({type: 'GET_SURAT_DATA'});

  axios
    .get(`${api}surah`)
    .then(res => {
      console.log(res.data);
      dispatch({type: 'GET_SURAT_DATA_SUCCESS', payload: res.data.data});
    })
    .catch(err => {
      dispatch({type: 'GET_SURAT_DATA_ERROR'});
      alert(err.message);
    });
};

export {getsuratdata}
