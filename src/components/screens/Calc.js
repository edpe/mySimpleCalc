import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class Calc extends Component{
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "green" }}>
      <TextInput
        style = {styles.input}
      />>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgb(41, 41, 41)",
    height: 150,
    width: 100 + "%",
    color: "rgb(255, 255, 255)",
    fontSize: 48,
    textAlign: "right"
  }
})

export default Calc;
