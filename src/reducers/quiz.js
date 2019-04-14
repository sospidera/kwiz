import { random } from 'lodash';

const initialState = {
  stage: 'START',
  loading: false
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_BEGIN_QUIZ':
      return requestStartQuiz(state, action.options);
    case 'BEGIN_QUIZ':
      return startQuiz(state, action.questions);
    case 'ABORT_QUIZ_START':
      return abortQuizStart(state);
    case 'ANSWER_QUESTION':
      state = answerQuestion(state, action.answer);
      state = getNewQuestionIfUnfinished(state);
      return completeIfFinished(state);
    case 'RESTART_QUIZ':
      return restartQuiz();
    default:
      return state;
  }
};

const requestStartQuiz = (state) => {
  return {
    ...state,
    loading: true
  };
}

const abortQuizStart = (state) => {
  return initialState;
}

const startQuiz = (state, questions) => {
  state = initializeQuiz(state, questions);
  state = getNewQuestionIfUnfinished(state);
  return state;
}

const answerQuestion = (state, answer) => {
  const correct = state.currentQuestion.correct_answer === answer;
  return {
    ...state,
    score: state.score + (correct ? 1 : 0),
    questionIndex: state.questionIndex + 1,
    answered: state.answered.concat([{
      question: state.currentQuestion,
      answer,
      correct 
    }])
  };
}

const initializeQuiz = (state, questions) => {
  return {
    ...state,
    stage: 'QUIZ',
    loading: false,
    questions: questions,
    numQuestions: questions.length, 
    questionIndex: 0,
    currentQuestion: questions[0],
    score: 0,
    answered: []
  };
}
const getNewQuestionIfUnfinished = (state) => {
  return quizFinished(state) ? state : {...state, currentQuestion: state.questions[state.questionIndex]};
}

const completeIfFinished = (state) => {
  if (quizFinished(state)) {
    return {
      ...state,
      stage: 'END'
    };
  } else {
    return state;
  }
}

const quizFinished = (state) => state.questionIndex === state.numQuestions;

const restartQuiz = () => {
  return initialState;
}

export default quiz;