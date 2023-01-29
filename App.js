import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Search from "./screens/Search";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        styles={{
          flexDirection: "row",
          margin: 10,
          marginHorizontal: 30,
          justifyContent: "space-between",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size, textColor }) => (
              <Ionicons name="home" color="black" size={24} textColor="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Browse",
            tabBarIcon: ({ color, size, textColor }) => (
              <Ionicons
                name="search"
                color="black"
                size={24}
                textColor="black"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
