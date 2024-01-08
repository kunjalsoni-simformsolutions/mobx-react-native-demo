import AsyncStorage from "@react-native-async-storage/async-storage";
import { action, computed, makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";

export class Movie {
  name: string;
  year: string;
}

class MovieStore {
  movies: Movie[];

  constructor() {
    this.movies = [];
    makeObservable(this, { movies: observable, addMovie: action });
    makePersistable(this, {
      name: "movies",
      properties: ["movies"],
      storage: AsyncStorage,
    });
  }

  addMovie(newMovie: Movie) {
    this.movies = [...this.movies, newMovie];
  }
}

class RootStore {
  movieStore: MovieStore;

  constructor() {
    this.movieStore = new MovieStore();
  }
}

export const store = new RootStore();
