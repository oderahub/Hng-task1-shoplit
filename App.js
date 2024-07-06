import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import CheckoutScreen from "./app/screens/CheckoutScreen";
import OrderSuccessScreen from "./app/screens/OrderSuccessScreen";
import BottomNavigation from "./app/components/BottomNavigation";

const App = () => {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("Home");

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  let ScreenComponent;
  switch (currentScreen) {
    case "Home":
      ScreenComponent = (
        <HomeScreen
          navigation={{ navigate }}
          checkoutItems={checkoutItems}
          setCheckoutItems={setCheckoutItems}
        />
      );
      break;
    case "Checkout":
      ScreenComponent = (
        <CheckoutScreen
          navigation={{ navigate }}
          checkoutItems={checkoutItems}
          setCheckoutItems={setCheckoutItems}
        />
      );
      break;
    case "OrderSuccess":
      ScreenComponent = <OrderSuccessScreen navigation={{ navigate }} />;
      break;
    default:
      ScreenComponent = <HomeScreen />;
      break;
  }

  return (
    <View style={styles.container}>
      {ScreenComponent}
      <BottomNavigation navigation={{ navigate }} activeTab={currentScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
