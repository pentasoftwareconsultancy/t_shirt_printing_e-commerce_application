import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {

    // Set the header with logo on the left side
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('../assets/images/Logo.png')}
                        style={{ width: 40, height: 40, marginLeft: 10 }}
                    />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    // Sample slider data with images and color options
    const sliderData = [
        {
            image: require('../assets/images/product1_default.jpg'),
            colors: [
                { color: '#FF5733', image: require('../assets/images/product1_red.jpg') },
                { color: '#33FF57', image: require('../assets/images/product1_green.jpg') },
                { color: '#3357FF', image: require('../assets/images/product1_blue.jpg') },
            ],
        },
        {
            image: require('../assets/images/product2_default.jpeg'),
            colors: [
                { color: '#FFFF33', image: require('../assets/images/product2_yellow.jpeg') },
                { color: '#57FF33', image: require('../assets/images/product2_lightgreen.jpeg') },
                { color: '#5733FF', image: require('../assets/images/product2_purple.jpeg') },
            ],
        },
        {
            image: require('../assets/images/product2_default.jpeg'),
            colors: [
                { color: '#FFFF33', image: require('../assets/images/product2_yellow.jpeg') },
                { color: '#57FF33', image: require('../assets/images/product2_lightgreen.jpeg') },
                { color: '#5733FF', image: require('../assets/images/product2_purple.jpeg') },
            ],
        },
    ];

    // State to track the selected color for each product slider
    const [selectedImage, setSelectedImage] = useState(sliderData[0].image);

    // Render individual slider item with 'Buy Now' button and color options
    const renderSliderItem = (item) => (
        <View style={styles.sliderItem}>
            <Image source={selectedImage} style={styles.sliderImage} />
            <TouchableOpacity style={styles.buyNowButton} onPress={() => navigation.navigate('ProductDetail')}>
                <Text style={styles.buyNowText}>Buy Now</Text>
            </TouchableOpacity>
            <View style={styles.colorOptions}>
                {item.colors.map((colorOption, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.colorOption, { backgroundColor: colorOption.color }]}
                        onPress={() => setSelectedImage(colorOption.image)} // Change image on color click
                    />
                ))}
            </View>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            {/* Product Slider */}
            <Text style={styles.sectionTitle}>Product Slider</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {sliderData.map((item, index) => (
                    <View key={index} style={styles.sliderContainer}>
                        {renderSliderItem(item)}
                    </View>
                ))}
            </ScrollView>

            {/* New Releases Section */}
            <Text style={styles.sectionTitle}>New Releases</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product2.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product2.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product2.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 2</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Best Sellers Section */}
            <Text style={styles.sectionTitle}>Best Sellers</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product3.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product3.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product3.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 4</Text>
                </TouchableOpacity>
            </ScrollView>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    sliderContainer: {
        width: 300,
        marginRight: 2,
    },
    sliderItem: {
        width: 250,
        height: 300,
        marginRight: 15,
        borderRadius: 10,
        backgroundColor: '#C8DDDC',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    sliderImage: {
        marginTop: -40,
        width: 240,
        height: 250, // Ensure it takes up most of the slider item space
        borderRadius: 10,
        resizeMode: 'cover',
    },
    buyNowButton: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: '#FF5733',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
    },
    buyNowText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    colorOptions: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        flexDirection: 'row',
    },
    colorOption: {
        width: 20,
        height: 20,
        marginLeft: 5,
        borderRadius: 10,
    },
    card: {
        width: 150,
        height: 180,
        marginRight: 25,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    cardImage: {
        marginTop: 4,
        borderRadius: 15,
        width: 140,
        height: 150, // Keeps image height consistent
        resizeMode: 'cover',
    },
    cardText: {
        padding: 5,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});
