// import React, { useState } from 'react';
// import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';  // Import Carousel component

// // Dummy data for the products
// const productData = [
//     { id: '1', name: 'New Release 1', category: 'New Releases', image: 'https://via.placeholder.com/150' },
//     { id: '2', name: 'New Release 2', category: 'New Releases', image: 'https://via.placeholder.com/150' },
//     { id: '3', name: 'Best Seller 1', category: 'Best Sellers', image: 'https://via.placeholder.com/150' },
//     { id: '4', name: 'Best Seller 2', category: 'Best Sellers', image: 'https://via.placeholder.com/150' },
//     { id: '5', name: 'Trending 1', category: 'Trending', image: 'https://via.placeholder.com/150' },
//     { id: '6', name: 'Trending 2', category: 'Trending', image: 'https://via.placeholder.com/150' },
// ];

// // ProductCard component to represent each card
// const ProductCard = ({ product, onPress }) => (
//     <TouchableOpacity style={styles.card} onPress={onPress}>
//         <Image source={{ uri: product.image }} style={styles.cardImage} />
//         <Text style={styles.cardTitle}>{product.name}</Text>
//     </TouchableOpacity>
// );

// const HomeScreen = ({ navigation }) => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const { width: screenWidth } = Dimensions.get('window'); // Get screen width

//     const navigateToProductDetail = (product) => {
//         // Navigate to detailed product view
//         navigation.navigate('ProductDetail', { product });
//     };

//     const renderCarouselItem = ({ item }) => {
//         // Check if the item has a valid URI before rendering
//         if (!item || !item.uri) {
//             return <Text>No image available</Text>; // Fallback if item or uri is undefined
//         }

//         return (
//             <View style={styles.sliderItem}>
//                 <Image source={{ uri: item.uri }} style={styles.sliderImage} />
//                 <TouchableOpacity style={styles.buyButton} onPress={() => console.log('Buy Now clicked')}>
//                     <Text style={styles.buyButtonText}>Buy Now</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             {/* Product Slider Section */}
//             <View style={styles.sliderContainer}>
//                 <Carousel
//                     data={[
//                         { id: '1', uri: 'https://via.placeholder.com/350x150' },
//                         { id: '2', uri: 'https://via.placeholder.com/350x150' },
//                         { id: '3', uri: 'https://via.placeholder.com/350x150' },
//                     ]}
//                     renderItem={renderCarouselItem}
//                     sliderWidth={screenWidth}
//                     itemWidth={screenWidth - 60} // Adjust width for carousel items
//                     onSnapToItem={(index) => setActiveIndex(index)}
//                 />
//             </View>

//             {/* Product Categories Section (New Releases, Best Sellers, Trending) */}
//             <Text style={styles.categoryTitle}>New Releases</Text>
//             <FlatList
//                 horizontal
//                 data={productData.filter(product => product.category === 'New Releases')}
//                 renderItem={({ item }) => (
//                     <ProductCard product={item} onPress={() => navigateToProductDetail(item)} />
//                 )}
//                 keyExtractor={item => item.id}
//             />

//             <Text style={styles.categoryTitle}>Best Sellers</Text>
//             <FlatList
//                 horizontal
//                 data={productData.filter(product => product.category === 'Best Sellers')}
//                 renderItem={({ item }) => (
//                     <ProductCard product={item} onPress={() => navigateToProductDetail(item)} />
//                 )}
//                 keyExtractor={item => item.id}
//             />

//             <Text style={styles.categoryTitle}>Trending</Text>
//             <FlatList
//                 horizontal
//                 data={productData.filter(product => product.category === 'Trending')}
//                 renderItem={({ item }) => (
//                     <ProductCard product={item} onPress={() => navigateToProductDetail(item)} />
//                 )}
//                 keyExtractor={item => item.id}
//             />
//         </ScrollView>
//     );
// };

// // Styles
// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },
//     sliderContainer: {
//         marginBottom: 20,
//     },
//     sliderItem: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     sliderImage: {
//         width: '100%',
//         height: 200,
//         resizeMode: 'cover',
//     },
//     buyButton: {
//         backgroundColor: 'tomato',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 5,
//         marginTop: 10,
//         alignItems: 'center',
//     },
//     buyButtonText: {
//         color: 'white',
//         fontSize: 18,
//     },
//     categoryTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginVertical: 10,
//     },
//     card: {
//         width: 150,
//         marginRight: 10,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         elevation: 3,
//         padding: 10,
//         alignItems: 'center',
//     },
//     cardImage: {
//         width: '100%',
//         height: 100,
//         resizeMode: 'cover',
//         borderRadius: 8,
//     },
//     cardTitle: {
//         marginTop: 10,
//         fontSize: 14,
//         fontWeight: 'bold',
//     },
// });

// export default HomeScreen;


import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default HomeScreen

