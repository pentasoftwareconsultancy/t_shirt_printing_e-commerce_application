import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

// Sample data with additional details like brand, offer, and image
const categories = [
  {
    id: '1',
    name: 'T-Shirts',
    brand: 'Brand A',
    offer: '20% Off',
    image: require('../assets/images/tshirt.jpg'), // Local image, replace with your actual image path
  },
  {
    id: '2',
    name: 'Caps',
    brand: 'Brand B',
    offer: 'Buy 1 Get 1 Free',
    image: require('../assets/images/caps.jpg'), // Local image, replace with your actual image path
  },
];

const CategoriesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetail', { category: item.name })}
    >
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardBrand}>{item.brand}</Text>
      <Text style={styles.cardOffer}>{item.offer}</Text>
    </TouchableOpacity>
  );

   // Adding header with back button
   React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 50,
    borderRadius: 10,
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardBrand: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  cardOffer: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6347', // Highlight the offer text with a red color
  },
});

export default CategoriesScreen;
