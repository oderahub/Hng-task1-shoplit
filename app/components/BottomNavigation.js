import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BottomNavigation = ({ navigation, activeTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.navItem}
      >
        <Text
          style={activeTab === "Home" ? styles.activeText : styles.inactiveText}
        >
          Products
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Checkout")}
        style={styles.navItem}
      >
        <Text
          style={
            activeTab === "Checkout" ? styles.activeText : styles.inactiveText
          }
        >
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 60,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  activeText: {
    color: "#000",
    fontWeight: "bold",
  },
  inactiveText: {
    color: "#aaa",
  },
});

export default BottomNavigation;
