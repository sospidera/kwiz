import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button } from 'react-native';
import StartScreen from './StartScreen';
import QuestionScreen from './QuestionScreen';
import EndScreen from './EndScreen';
import { Platform, StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';

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
        <FlashMessage position='top'/>
      </View>
    );
  }
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Kwiz);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#c3c3c3',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});

