import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { requestBegin } from './../actionCreators';
import Text from './Text';
import Button from './Button';

class StartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[{flex: 5}, styles.header]}>Welcome to the Trivia Challenge!</Text>
        <Text style={{flex: 5}}>You will be presented with 10 True or False questions.</Text>
        <Text style={{flex: 5}}>Can you score 100%?</Text>
        <View style={[{flex: 1, width: 100}]}>
          <Button
            onPress={() => {this.props.requestBegin()}}
            loading={this.props.quiz.loading}
            title='BEGIN'
          /> 
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  requestBegin: () => dispatch(requestBegin({amount: 10, difficulty: 'hard'}))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '62%'
  },
  header: {
    fontWeight: 'bold'
  }
});
