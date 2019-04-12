import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

class StartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Trivia Challenge!</Text>
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
        <Button
          onPress={() => {this.props.begin()}}
          title="BEGIN"
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
    begin: () => dispatch({ type: "BEGIN_QUIZ" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
