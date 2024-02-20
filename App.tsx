/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Home from "./src/components/Home";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "lightgrey" }}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
