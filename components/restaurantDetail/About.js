import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Farmhouse in the country",
  image_url:
    "https://s3-media0.fl.yelpcdn.com/bphoto/3nknj58V3hsnnOc1XW6E5A/o.jpg",
  price: "$$",
  rating: 4.5,
  reviews: 1244,
  categories: [{ title: "Indı" }, { title: "Comfort Food" }],
};

const About = (props) => {
  const { name, image, price, rating, reviews, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join("•");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurntDescription description={description} />
    </View>
  );
};
const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 220 }} />
);
const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 30,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);
const RestaurntDescription = (props) => (
  <Text
    style={{
      fontSize: 15,
      fontWeight: "400",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);

export default About;

const styles = StyleSheet.create({});
