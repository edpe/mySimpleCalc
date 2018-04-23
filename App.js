/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calc } from './src/components/screens';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Calc />
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
