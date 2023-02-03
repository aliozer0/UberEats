import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ViewCard() {
  const [modalVisible, setModalVisible] = useState(false);

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

  const checkoutModalContent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 30,
            width: 150,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: "white" }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            flexDirection: "row",
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
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
                borderRadius: 30,
                width: 300,
                position: "relative",
                padding: 15,
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
