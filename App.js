import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { Ionicons, AntDesign } from "@expo/vector-icons";

import RestaurantDetail from "./screens/RestaurantDetail";
import RootNavigation from "./navigation";

export default function App() {
  return <RootNavigation />;
}

const styles = StyleSheet.create({});
