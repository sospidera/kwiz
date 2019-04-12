import { random } from 'lodash';

const initialState = {
  stage: "START",
  score: 0,
  numQuestions: 10,
  numAnswered: 0,
  answered: []
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case 'BEGIN_QUIZ':
      return startQuiz(state);
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

const startQuiz = (state) => {
  state = getNewQuestionIfUnfinished(state);
  return {
    ...state,
    stage: "QUIZ"
  };
}

const answerQuestion = (state, answer) => {
  return {
    ...state,
    score: state.score + (state.question.answer === answer ? 1 : 0),
    numAnswered: state.numAnswered + 1,
    answered: state.answered.concat([{
      question: state.question,
      answer}]
    )
  };
}

const getNewQuestionIfUnfinished = (state) => {
  const num = random(0,4);
  return {
    ...state,
    question: {
      topic: `Topic #${random(0, 100)}`,
      text: `Hey is the best number ${num}?`,
      answer: num === 2
    }
  }
}

const completeIfFinished = (state) => {
  if (state.numAnswered === state.numQuestions) {
    return {
      ...state,
      stage: "END"
    };
  } else {
    return state;
  }
}

const restartQuiz = () => {
  return initialState;
}

export default quiz;