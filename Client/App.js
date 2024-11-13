import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import MaterialCommunityIcons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import CartScreen from "./src/screens/CartScreen";
import FavouriteScreen from "./src/screens/FavouriteScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";

// Create Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            // Assign icons based on route name
            if (route.name === 'Home') {
              iconName = 'home';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Search') {
              iconName = 'search';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Categories') {
              iconName = 'widgets';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Cart') {
              iconName = 'cart';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Account') {
              iconName = 'person';
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },

          // Custom headerRight
          headerRight: () => {
            const navigation = useNavigation(); // Use the navigation hook inside the header function

            return (
              <>
                <Ionicons
                  name="search"
                  size={25}
                  color="black"
                  style={{ marginLeft: 15 }}
                  onPress={() => navigation.navigate('Search')} // Navigate to the Search screen on press
                />
                <Ionicons
                  name="notifications"
                  size={25}
                  color="black"
                  style={{ marginLeft: 15, marginRight: 15 }}
                  onPress={() => alert('Notifications clicked!')} // Handle notifications click
                />
              </>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato', // Active icon color
          inactiveTintColor: 'gray', // Inactive icon color
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Categories" component={CartScreen} />
        <Tab.Screen name="Account" component={UserProfileScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
