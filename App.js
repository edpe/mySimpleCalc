/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Calc } from './src/components/screens';

export default class App extends Component<Props> {
  render() {
    return (

      <SafeAreaView style={styles.container}>
      <Calc />
      </SafeAreaView>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
