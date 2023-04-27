import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  text1: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
  },
  text2: {
    fontSize: 26,
    fontStyle: 'italic',
    margin: 0,
    padding: 0,
  },
});

export default function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hello</Text>
      <Text style={styles.text2}>World</Text>
    </View>
  );
}