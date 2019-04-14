import React from 'react';
import { StyleSheet, Text as ReactNativeText } from 'react-native';

export default class Text extends React.Component {
  render() {
    return (
      <ReactNativeText style={[styles.text].concat(this.props.style)}>
        {this.props.children}
      </ReactNativeText>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 23
  }
});