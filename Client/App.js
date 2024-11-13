import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import CartScreen from "./src/screens/CartScreen";
import FavouriteScreen from "./src/screens/FavouriteScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";

// Dummy Screens for each tab
// function Home() {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function Search() {
//   return (
//     <View>
//       <Text>Search Screen</Text>
//     </View>
//   );
// }

// function Cart() {
//   return (
//     <View>
//       <Text>Cart Screen</Text>
//     </View>
//   );
// }

// function Favourites() {
//   return (
//     <View>
//       <Text>Favourites Screen</Text>
//     </View>
//   );
// }

// function UserProfile() {
//   return (
//     <View>
//       <Text>User Profile Screen</Text>
//     </View>
//   );
// }

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
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Cart') {
              iconName = 'cart';
            } else if (route.name === 'Favourites') {
              iconName = 'heart';
            } else if (route.name === 'UserProfile') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          headerRight: () => (
            // Notifications icon on the right of the header
            <Ionicons
              name="notifications"
              size={25}
              color="black"
              style={{ marginRight: 15 }}
              onPress={() => alert('Notifications clicked!')} // Handle notification click
            />
          ),
        })}
        tabBarOptions={{
          activeTintColor: 'tomato', // Active icon color
          inactiveTintColor: 'gray', // Inactive icon color
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Favourites" component={FavouriteScreen} />
        <Tab.Screen name="UserProfile" component={UserProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
