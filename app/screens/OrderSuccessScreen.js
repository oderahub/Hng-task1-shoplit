import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const OrderSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Order Successful!</Text>
      <Button title="Okay" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default OrderSuccessScreen;
