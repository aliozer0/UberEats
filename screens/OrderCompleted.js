import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selecedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  console.log(totalUSD);

  return (
    <SafeAreaView>
      <Text>
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>
    </SafeAreaView>
  );
}
