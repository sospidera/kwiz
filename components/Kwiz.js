import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import StartScreen from './StartScreen';
import QuestionScreen from './QuestionScreen';
import EndScreen from './EndScreen';

asdf = "ASDF";
qwerty = "QWERTY";

class Kwiz extends React.Component {

  currentScreen() {
    switch (this.props.quiz.stage) {
      case 'START':
        return <StartScreen/>;
      case 'QUIZ':
        return <QuestionScreen/>;
      case 'END':
        return <EndScreen/>;
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.currentScreen()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => state;

// const mapDispatchToProps = (dispatch) => {
//   return {
//     begin: (nextStage) => dispatch({ type: "BEGIN_QUIZ" })
//     begin: (nextStage) => dispatch({ type: "BEGIN_QUIZ" })
//   };
// };

export default connect(mapStateToProps)(Kwiz);
