import React from "react";
import { View, Text, FlatList, Button, StyleSheet, Image } from "react-native";

const CheckoutScreen = ({ navigation, checkoutItems, setCheckoutItems }) => {
  const removeFromCheckout = (id) => {
    setCheckoutItems(checkoutItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={checkoutItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button
              title="Remove"
              onPress={() => removeFromCheckout(item.id)}
            />
          </View>
        )}
      />
      <Button
        title="Order!!"
        onPress={() => navigation.navigate("OrderSuccess")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
});

export default CheckoutScreen;
