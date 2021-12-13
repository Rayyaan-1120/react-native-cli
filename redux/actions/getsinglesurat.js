import axios from "axios";

const api = 'http://api.alquran.cloud/v1/';

const getsinglesurat = (num) => async (dispatch) => {
  dispatch({type: 'GET_SINGLESURAT_DATA'});

  axios
    .get(`${api}surah/${num}/ar.alafasy`)
    .then(res => {
      console.log(res.data.data.ayahs);
      dispatch({type: 'GET_SINGLESURAT_DATA_SUCCESS', payload: res.data.data.ayahs});
    })
    .catch(err => {
      dispatch({type: 'GET_SINGLESURAT_DATA_ERROR'});
      alert(err);
      console.log(err)
    });
};

const getsinglesuratenglish = (num) => async (dispatch) => {
    dispatch({type: 'GET_SINGLESURAT_DATA_EN'});
  
    axios
      .get(`${api}surah/${num}/en.asad`)
      .then(res => {
        console.log(res.data.data);
        dispatch({type: 'GET_SINGLESURAT_DATA_EN_SUCCESS', payload: res.data.data});
      })
      .catch(err => {
        dispatch({type: 'GET_SINGLESURAT_DATA_EN_ERROR'});
        alert(err.message);
      });
  };
  

export {getsinglesurat,getsinglesuratenglish}
