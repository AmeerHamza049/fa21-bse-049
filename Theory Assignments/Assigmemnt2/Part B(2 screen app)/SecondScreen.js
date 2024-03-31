import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';

const SecondScreen = () => {
  const [carModel, setCarModel] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [carYear, setCarYear] = useState('');

  const [carsForSale, setCarsForSale] = useState([]);

  const handleAddCarForSale = () => {
    if (carModel && carPrice && carYear) {
      const newCar = {
        model: carModel,
        price: carPrice,
        year: carYear,
      };
      setCarsForSale([...carsForSale, newCar]);
      // Clear input fields after adding car
      setCarModel('');
      setCarPrice('');
      setCarYear('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car Buying Module</Text>
      <ScrollView style={styles.scrollView}>
        {carsForSale.map((car, index) => (
          <View key={index} style={styles.carContainer}>
            <Text>Model: {car.model}</Text>
            <Text>Price: ${car.price}</Text>
            <Text>Year: {car.year}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Car Model"
          value={carModel}
          onChangeText={setCarModel}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={carPrice}
          onChangeText={setCarPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Year"
          value={carYear}
          onChangeText={setCarYear}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddCarForSale}>
          <Text style={styles.addButtonText}>Add Car for Sale</Text>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
    marginBottom: 20,
  },
  carContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SecondScreen;
