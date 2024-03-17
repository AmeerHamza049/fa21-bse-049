import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameLayout = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = (number) => {
    setInputValue(prevValue => prevValue + number.toString());
  };

  const handleClearPress = () => {
    setInputValue('');
  };

  const handleOkPress = () => {
    console.log('Entered Value:', inputValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GameLayout</Text>
      <Text style={styles.input}>{inputValue}</Text>
      <View style={styles.buttonContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.button}
            onPress={() => handleButtonPress(number)}
          >
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.button, styles.specialButton]}
          onPress={handleOkPress}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.specialButton]}
          onPress={handleClearPress}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    margin: 5,
    borderRadius: 5,
  },
  specialButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    fontSize: 24,
  },
});

export default GameLayout;
