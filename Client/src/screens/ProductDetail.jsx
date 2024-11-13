import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetail = ({ route }) => {
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Detail</Text>
      <Text style={styles.subtitle}>Category: {category}</Text>
      {/* Add more product details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default ProductDetail;
