import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as ReactNativeButton } from 'react-native-elements';

export default class Button extends React.Component {
  render() {
    return (
      <ReactNativeButton buttonStyle={[styles.button].concat(this.props.buttonStyle)} {...this.props}>
        {this.props.children}
      </ReactNativeButton>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black'
  }
});