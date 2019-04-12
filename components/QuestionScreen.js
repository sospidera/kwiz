import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

class QuestionScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.quiz.question.topic}</Text>
        <Text>{this.props.quiz.question.text}</Text>
        <Text>Answer: {this.props.quiz.question.answer ? "TRUE" : "FALSE"}</Text>
        <Text>{this.props.quiz.numAnswered} of 10</Text>
        <Button
          onPress={() => {this.props.answer(true)}}
          title="TRUE"
        />
        <Button
          onPress={() => {this.props.answer(false)}}
          title="FALSE"
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    answer: (ans) => dispatch({ type: "ANSWER_QUESTION", answer: ans })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);
