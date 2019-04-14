import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View } from 'react-native';
import { AllHtmlEntities as Entities } from 'html-entities';
import Text from './Text';
import Button from './Button';

const entities = new Entities();

class EndScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={[{flexGrow: 1, width: '100%', paddingHorizontal: '7%'}, styles.container]}>
        <View style={[{flex: 1}, styles.container]}>
          <Text style={styles.header}>You scored</Text>
          <Text style={[styles.header, {marginBottom: 40}]}>{this.props.quiz.score} / 10</Text>
          {getResults(this.props.quiz.answered)}
          <View style={{ marginTop: 40, marginBottom: 20 }}>
            <Button
              onPress={() => {this.props.restart()}}
              title='PLAY AGAIN?'
            />
          </View>
        </View>
      </ScrollView>
    );
  }
};

const getResults = (answered) => {
  let index = 0;
  return answered.map((answered) => {
    const color = answered.correct ? styles.correct : styles.incorrect;
    return (
      <View key={`answer-info-${index}`} style={styles.buttons}>
        <Text style={[color, styles.bullet]} key={`question-${index}`}>
          {answered.correct ? '+' : '-'}
        </Text>
        <Text style={[color, styles.answer]} key={`questionb-${index++}`}>
          {entities.decode(`${answered.question.correct_answer}: ${answered.question.question}`)}
        </Text>
      </View>
    );
  });
} 

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    restart: (nextStage) => dispatch({ type: 'RESTART_QUIZ' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    fontWeight: 'bold'
  },
  bullet: {
    width: 20
  },
  answer: {
    flex: 1,
    paddingLeft: 20,
    textAlign: 'left',
    alignItems: 'flex-start'
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 10
  },
  correct: {
    color: '#898989'
  },
  incorrect: {
    color: '#F44336'
  }
});
