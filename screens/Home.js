import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Categories />
          <RestaurantItem />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
