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
import { getPersistedStore } from "mobx-persist-store";
import { MovieStore, store } from "./src/store/MovieStore";

const desiredStoreVersion = 1;

const App = () => {
  useEffect(() => {
    const checkAndUpdateStoreVersion = async () => {
      const persistedState: MovieStore | null = await getPersistedStore(
        store.movieStore
      );
      if (persistedState && persistedState.version < desiredStoreVersion) {
        store.movieStore.upgradeStoreVersion();
      }
    };

    checkAndUpdateStoreVersion();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "lightgrey" }}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
