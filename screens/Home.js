import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem";
import BottomTabs from "../components/BottomTabs";
import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "L5-rbY6_u4IqRcC7W4TKDVs6ifdL9K_9Ls1vf4e0qbDWTvxtBDo_-Z2grRnGKMyUL4Gu0jvfWNGF_6ogR7GbpqqQJqy_KOyCIPHNgnjCRhtOYwzdnJzBfDCpy-zUY3Yx";
const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("new york");

  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=$[city]`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} cityHandler={setCity} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
