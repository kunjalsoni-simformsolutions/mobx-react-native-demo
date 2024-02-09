import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Movie, store } from "../store/MovieStore";
import { observer } from "mobx-react";
import EditMovie from "./EditMovie";

const Home = observer(() => {
  const [movieName, setMovieName] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieToEdit, setMovieToEdit] = useState<Movie | null>(null);

  return (
    <View>
      <Modal transparent visible={movieToEdit != null}>
        <EditMovie movieToEdit={movieToEdit} setMovieToEdit={setMovieToEdit} />
      </Modal>
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
            store.movieStore.addMovie({
              id:
                store.movieStore.movies.length > 0
                  ? store.movieStore.movies[store.movieStore.movies.length - 1]
                      .id + 1
                  : 1,
              name: movieName,
              year: movieYear,
            });
            setMovieName("");
            setMovieYear("");
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
                    paddingHorizontal: 40,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Text>
                    {item.name}, {item.year}, {item.id}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setMovieToEdit(item);
                      }}
                    >
                      <View
                        style={{
                          marginHorizontal: 10,
                          padding: 5,
                          backgroundColor: "grey",
                        }}
                      >
                        <Text style={{ color: "white" }}>Edit</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        store.movieStore.deleteMovie(item.id);
                      }}
                    >
                      <View style={{ padding: 5, backgroundColor: "grey" }}>
                        <Text style={{ color: "white" }}>Delete</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
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
