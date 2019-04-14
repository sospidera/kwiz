import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View } from 'react-native';
import { AllHtmlEntities as Entities } from 'html-entities';
import Text from './Text';
import Button from './Button';

const entities = new Entities();

class QuestionScreen extends React.Component {
  render() {
    const questionObj = this.props.quiz.questions[this.props.quiz.questionIndex];
    const { category, question, correct_answer } = questionObj;
    return (
      <View style={styles.container}>
        <Text style={[{flex: 2}, styles.header]}>{entities.decode(category)}</Text>
        <View style={[{flex: 4}, styles.questionBox]}>
          <ScrollView contentContainerStyle={[{flexGrow: 1}, styles.scrollQuestionBox]}>
            <Text>
              {entities.decode(question)}
            </Text>
          </ScrollView>
        </View>
        <Text style={{flex: 2}}>{this.props.quiz.questionIndex + 1} of 10</Text>
        <View style={[{flex: 2}, styles.choices]}>
          <View style={{flex: 2}}>
            <Button
              onPress={() => {this.props.answer('True')}}
              title='TRUE'
            />
          </View>
          <View style={{flex: 1}}/>
          <View style={{flex: 2}}>
            <Button
              onPress={() => {this.props.answer('False')}}
              title='FALSE'
            />
          </View>
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    answer: (ans) => dispatch({ type: 'ANSWER_QUESTION', answer: ans })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%'
  },
  choices: {
    flexDirection: 'row'
  },
  questionBox: {
    borderWidth: 2,
    padding: 10,
    width: '100%',
    aspectRatio: 1
  },
  scrollQuestionBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop: '5%',
    fontWeight: 'bold'
  }
});