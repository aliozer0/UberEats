import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItem from "../components/restaurantDetail/MenuItem";
import ViewCard from "../components/restaurantDetail/ViewCard";

const foods = [
  {
    title: "Lasagna",
    description: "With buttery lettuce ,tomate and sauce bechamel",
    price: "$13.50",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
  {
    title: "Lasagna",
    description: "With buttery lettuce ,tomate and sauce bechamel",
    price: "$13.50",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
  {
    title: "Lasagna",
    description: "With buttery lettuce ,tomate and sauce bechamefsdfsdfl",
    price: "$13.50",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
];
const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name}  foods={foods}/>
      <ViewCard navigation={navigation} />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
