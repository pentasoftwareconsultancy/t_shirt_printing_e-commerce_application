import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

// Sample data with additional details like brand, offer, and image
const categories = [
  {
    id: '1',
    name: 'Shirts',
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
    <View style={styles.card}>
      <View style={styles.cardImageContainer}>
        <Image source={item.image} style={styles.cardImage} />

        {/* Like Icon at the top right */}
        <TouchableOpacity style={styles.likeIcon}>
          <Ionicons name="heart-outline" size={24} color="#FF6347" />
        </TouchableOpacity>
      </View>

      {/* Bottom left: Name, Brand, Offer */}
      <View style={styles.infoContainer}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardBrand}>{item.brand}</Text>
        <Text style={styles.cardOffer}>{item.offer}</Text>
      </View>

      {/* Bottom right: Buy Now button */}
      <TouchableOpacity style={styles.buyNowButton}>
        <Text style={styles.buyNowText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
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
    backgroundColor: '#F5F5F7',
  },
  card: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 50,
    borderRadius: 30,
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: 'center',
    position: 'relative',
  },
  cardImageContainer: {
    width: 330,
    height: 350,
    borderRadius: 20,
    overflow: 'hidden',
   
  },
  cardImage: {
    width: '100%',
    height: '300',
    borderRadius: 20,
  },
  likeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 8,
    borderRadius: 20,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  cardName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  cardBrand: {
    fontSize: 16,
    color: '#777',
  },
  cardOffer: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6347', // Highlight the offer text with a red color
  },
  buyNowButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#1E90FF', // Blue color for Buy Now button
    paddingVertical: 15, // Increased vertical padding
    paddingHorizontal: 30, // Increased horizontal padding
    borderRadius: 20,
    // width: 150, // Fixed width (optional)
    // height: 50, // Fixed height (optional)
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  
  buyNowText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoriesScreen;
