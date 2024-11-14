import React from 'react';
import { View, Text } from 'react-native';

const ShirtProductScreen = ({ route }) => {
  const { itemId } = route.params; // Access the itemId passed from the previous screen

  return (
    <View>
      <Text>Product Details for Item ID: {itemId}</Text>
    </View>
  );
};

export default ShirtProductScreen;
