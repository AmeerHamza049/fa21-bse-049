import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';

const DiscountCalculatorApp = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const calculateDiscount = () => {
    if (originalPrice === '' || discountPercentage === '') {
      alert('Please enter original price and discount percentage.');
      return;
    }

    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0 || discount > 100) {
      alert('Please enter valid numbers for original price and discount percentage.');
      return;
    }

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    const calculation = `${price} - ${discount}% = ${finalPrice.toFixed(2)}`;
    
    setHistory([...history, calculation]);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Discount Calculator</Text>
      <TextInput
        style={{ marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1, width: 200 }}
        placeholder="Original Price"
        keyboardType="numeric"
        value={originalPrice}
        onChangeText={text => setOriginalPrice(text)}
      />
      <TextInput
        style={{ marginBottom: 20, padding: 10, borderColor: 'gray', borderWidth: 1, width: 200 }}
        placeholder="Discount Percentage"
        keyboardType="numeric"
        value={discountPercentage}
        onChangeText={text => setDiscountPercentage(text)}
      />
      <Button title="Calculate" onPress={calculateDiscount} />
      <Button title="View History" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Calculation History</Text>
          {history.map((calculation, index) => (
            <Text key={index}>{calculation}</Text>
          ))}
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default DiscountCalculatorApp;
