import AsyncStorage from "@react-native-async-storage/async-storage";
import { action, makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";

export class Movie {
  id: number;
  name?: string;
  newName?: string;
  year: string;
}

export class MovieStore {
  version = 1; //Initial version
  movies: Movie[];

  constructor() {
    this.movies = [];

    makeObservable(this, {
      version: observable,
      movies: observable,
      addMovie: action,
      upgradeStoreVersion: action,
      deleteMovie: action,
      editMovie: action,
    });

    makePersistable(this, {
      name: "movies",
      properties: ["movies", "version"],
      storage: AsyncStorage,
    });
  }

  upgradeStoreVersion() {
    if (this.version == 1) {
      // Migrate persisted data to Version 2
      this.movies.forEach((movie) => {
        movie.newName = movie.name;
      });
      this.version += 1;
    }
  }

  addMovie(newMovie: Movie) {
    this.movies.push(newMovie);
  }

  deleteMovie(id: number) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  editMovie(movie: Movie) {
    this.movies = this.movies.map((mov) => {
      return mov.id === movie.id ? movie : mov;
    });
  }
}

class RootStore {
  movieStore: MovieStore;

  constructor() {
    this.movieStore = new MovieStore();
  }
}

export const store = new RootStore();
