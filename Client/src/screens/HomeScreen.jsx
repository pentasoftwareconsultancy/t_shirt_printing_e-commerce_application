import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {

    // Set the header with logo on the left side
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('../assets/images/Logo.png')} // Use your logo here
                        style={{ width: 40, height: 40, marginLeft: 10 }}
                    />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    // Render slider item for the product slider
    const renderSliderItem = ({ item }) => {
        if (!item || !item.image) return null;

        return (
            <View style={styles.sliderItem}>
                <Image source={item.image} style={styles.sliderImage} />
                <TouchableOpacity style={styles.buyNowButton}>
                    <Text style={styles.buyNowText}>Buy Now</Text>
                </TouchableOpacity>
                <View style={styles.colorOptions}>
                    {item.colors && item.colors.map((color, index) => (
                        <View key={index} style={[styles.colorOption, { backgroundColor: color }]} />
                    ))}
                </View>
            </View>
        );
    };

    // Slider data
    const sliderData = [
        {
            image: require('../assets/images/product1.jpeg'), // Correct path to image
            colors: ['#FF5733', '#33FF57', '#3357FF'],
        },
        {
            image: require('../assets/images/product2.jpeg'), // Correct path to image
            colors: ['#FFFF33', '#57FF33', '#5733FF'],
        },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Product Slider */}
            <Text style={styles.sectionTitle}>New Releases</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product1.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product1.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product1.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 1</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Best Sellers Section */}
            <Text style={styles.sectionTitle}>Best Sellers</Text>
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

            {/* Trending Products Section */}
            <Text style={styles.sectionTitle}>Trending</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product3.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product3.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={require('../assets/images/product3.jpeg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Product 3</Text>
                </TouchableOpacity>
            </ScrollView>
        </ScrollView>
    );
}

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
    card: {
        width: 150,
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
    },
    cardImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    cardText: {
        padding: 5,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
    },
    buyNowButton: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: '#FF5733',
        padding: 5,
        borderRadius: 5,
    },
    buyNowText: {
        color: 'white',
        fontWeight: 'bold',
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
    sliderItem: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
});
