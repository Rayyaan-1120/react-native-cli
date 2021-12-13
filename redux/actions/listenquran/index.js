import axios from 'axios';

const api = `https://api.quran.com/api/v4/chapters?language=en`;

const listenquranaction = () => async (dispatch) => {
  dispatch({type: 'GET_LISTENQURAN_DATA'});

  axios
    .get(api)
    .then(res => {
        console.log(res.data)
      dispatch({type: 'GET_LISTENQURAN_DATA_SUCCESS', payload: res.data.chapters});
    })
    .catch(err => dispatch({type: 'GET_LISTENQURAN_DATA_ERROR'}));
};

export {listenquranaction};
