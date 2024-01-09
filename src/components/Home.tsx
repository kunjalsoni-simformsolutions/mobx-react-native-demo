import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { store } from "../store/MovieStore";
import { observer } from "mobx-react";

const Home = observer(() => {
  const [movieName, setMovieName] = useState("");
  const [movieYear, setMovieYear] = useState("");
  // const [moviesData, setMoviesData] = useState<Movie[]>([]);

  return (
    <View>
      <View style={{ backgroundColor: "white" }}>
        <TextInput
          style={{
            paddingHorizontal: 10,
            margin: 30,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          placeholder="Name"
          value={movieName}
          onChangeText={setMovieName}
        />
        <TextInput
          style={{
            paddingHorizontal: 10,
            marginHorizontal: 30,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          placeholder="Year"
          value={movieYear}
          onChangeText={setMovieYear}
        />
        <TouchableOpacity
          style={{
            marginVertical: 30,
            alignSelf: "center",
            width: "40%",
            alignItems: "center",
            backgroundColor: "#3471eb",
            borderRadius: 25,
          }}
          onPress={() => {
            Keyboard.dismiss();
            store.movieStore.addMovie({ name: movieName, year: movieYear });
            setMovieName('')
            setMovieYear('')
          }}
        >
          <Text style={{ margin: 10, fontSize: 18, color: "white" }}>Save</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={store.movieStore.movies}
          renderItem={({ item }: any) => {
            return (
              <View>
                <View
                  style={{
                    marginVertical: 10,
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>
                    {item.name}, {item.year}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
});

export default Home;
