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
// import EditMovie from "./EditMovie";

export interface Movie {
  id: number;
  name: string;
  year: string;
}

const Home = () => {
  const [movieName, setMovieName] = useState("");
  const [movieYear, setMovieYear] = useState("");
  // const [movieToEdit, setMovieToEdit] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <View>
      {/* <Modal transparent visible={movieToEdit != null}>
        <EditMovie movieToEdit={movieToEdit} setMovieToEdit={setMovieToEdit} />
      </Modal> */}
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
            const lastMovieId =
              movies.length > 0 ? movies[movies.length - 1].id : 0;
            setMovies([
              ...movies,
              {
                id: lastMovieId + 1,
                name: movieName,
                year: movieYear,
              },
            ]);
          }}
        >
          <Text style={{ margin: 10, fontSize: 18, color: "white" }}>Save</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={movies}
          renderItem={({ item }) => {
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
                    {item.name}, {item.year}
                  </Text>
                  {/* <View
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
                  </View> */}
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;
