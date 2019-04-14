import { getQuestions } from './resources/questions';
import { showMessage } from 'react-native-flash-message';

export function requestBegin({amount, difficulty}) {
  return (dispatch) => {
    dispatch({ type: 'REQUEST_BEGIN_QUIZ'});
    getQuestions({amount, difficulty, type: 'boolean'})
      .then((questions) => dispatch({ type: 'BEGIN_QUIZ', questions }))
      .catch((error) => {
        console.log(JSON.stringify(error));
        dispatch(abortQuizStart('Error', 'Sorry, there was a problem retrieving the quiz.'));
      });
  }
};

export function abortQuizStart(message, description = '') {
  return (dispatch) => {
    showMessage({
      message,
      description,
      type: 'default',
      backgroundColor: 'red',
      color: 'white'
    });
    dispatch({ type: 'ABORT_QUIZ_START'});
  }
}