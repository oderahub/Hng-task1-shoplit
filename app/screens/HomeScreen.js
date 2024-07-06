import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

function HomeScreen({ navigation, checkoutItems, setCheckoutItems }) {
  const [products] = useState([
    {
      id: "1",
      name: "Doll",
      price: 50,
      image: require("../assets/9nsplash.jpg"),
    },
    {
      id: "2",
      name: "Box size",
      price: 20,
      image: require("../assets/8nsplash.jpg"),
    },
    {
      id: "3",
      name: "Nice Boom",
      price: 30,
      image: require("../assets/7nsplash.jpg"),
    },
  ]);

  const addToCheckout = (item) => {
    setCheckoutItems([...checkoutItems, item]);
    navigation.navigate("Checkout");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.container}>
        {products.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCheckout(item)}
            >
              <Text style={styles.buttonText}>Add to Checkout</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  card: {
    width: 200,
    padding: 20,
    marginVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ff6347",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;
