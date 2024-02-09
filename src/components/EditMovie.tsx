import React from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { store } from "../store/MovieStore";

const EditMovie = ({ movieToEdit, setMovieToEdit }) => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "rgba(255,255,255,0.9)",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <TextInput
          style={{
            paddingHorizontal: 10,
            margin: 30,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          placeholder="Name"
          value={movieToEdit.name}
          onChangeText={(text) => {
            setMovieToEdit({ ...movieToEdit, name: text });
          }}
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
          value={movieToEdit.year}
          onChangeText={(text) => {
            setMovieToEdit({ ...movieToEdit, year: text });
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
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
              store.movieStore.editMovie(movieToEdit);
              setMovieToEdit(null);
            }}
          >
            <Text style={{ margin: 10, fontSize: 18, color: "white" }}>
              Save
            </Text>
          </TouchableOpacity>
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
              setMovieToEdit(null);
            }}
          >
            <Text style={{ margin: 10, fontSize: 18, color: "white" }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditMovie;
