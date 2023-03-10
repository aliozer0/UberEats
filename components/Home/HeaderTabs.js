import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderTabs = (props) => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButtons
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButtons 
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};
const HeaderButtons = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        fontSize: 15,
        color: props.activeTab === props.text ? "white" : "black",
        fontWeight: "700",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default HeaderTabs;

const styles = StyleSheet.create({});
