import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

class EndScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You scored</Text>
        <Text>{this.props.quiz.score} / 10</Text>
        {getResults(this.props.quiz.answered)}
        <Button
          onPress={() => {this.props.restart()}}
          title="PLAY AGAIN?"
        />
      </View>
    );
  }
};

const getResults = (answered) => {
  let index = 0;
  return answered.map((answered) => {
    return <Text key={`result-${index++}`}>{answered.question.text} {answered.answer === answered.question.answer? "CORRECT!" : "NO!!!!!"}</Text>;
  });
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    restart: (nextStage) => dispatch({ type: "RESTART_QUIZ" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);
