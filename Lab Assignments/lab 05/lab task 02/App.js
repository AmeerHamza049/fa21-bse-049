import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleLogin = () => {
    if (username === 'cspeople' && password === 'computerscience') {
      Alert.alert('Success', 'Login successful');
    } else {
      Alert.alert('Error', 'Incorrect username or password');
    }
  };

  const handleInputChange = (value, field) => {
    if (field === 'username') {
      setUsername(value);
    } else if (field === 'password') {
      setPassword(value);
    }

    setButtonDisabled(username === '' || password === '');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => handleInputChange(text, 'username')}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => handleInputChange(text, 'password')}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, buttonDisabled && styles.disabled]}
        onPress={handleLogin}
        disabled={buttonDisabled}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  disabled: {
    backgroundColor: '#ccc',
  },
});

export default LoginScreen;
