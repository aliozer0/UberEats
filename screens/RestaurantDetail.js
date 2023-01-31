import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItem from "../components/restaurantDetail/MenuItem";
import ViewCard from "../components/restaurantDetail/ViewCard";

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem />
      <ViewCard navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
