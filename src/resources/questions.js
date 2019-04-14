import axios from 'axios';
import qs from 'qs';

export function getQuestions({amount, difficulty, type}) {
  return axios({
    method: 'get',
    url: 'https://opentdb.com/api.php',
    params: {
      amount,
      difficulty,
      type
    }
  })
  .then((resp) => resp.data.results)
  .catch(error => {
    console.log(JSON.stringify(error.response));
  });
}