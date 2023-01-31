import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ViewCard() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        flexDirection:"row",
        bottom: 130,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "black",
            alignItems: "center",

            borderRadius: 30,
            width: 300,
            position: "relative",
            padding: 13,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
