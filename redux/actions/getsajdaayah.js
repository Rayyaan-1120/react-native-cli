import axios from "axios";

const api = 'http://api.alquran.cloud/v1/';

const getsajdaayah = () => async (dispatch) => {
  dispatch({type: 'GET_SAJDA_AYAH_DATA'});

  axios
    .get(`${api}sajda/quran-uthmani`)
    .then(res => {
      console.log(res.data);
      dispatch({type: 'GET_SAJDA_AYAH_SUCCESS', payload: res.data.data.ayahs});
    })
    .catch(err => {
      dispatch({type: 'GET_SAJDA_AYAH_ERROR'});
      alert(err.message);
    });
};

export {getsajdaayah}