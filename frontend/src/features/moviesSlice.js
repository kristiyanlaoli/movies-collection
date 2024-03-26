import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  isLoading: false,
  isAddingMovie: false,
  isEditingMovie: false,
  isDeleteMovie: false,
  isSearchMovie: false,
};

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:4200/api/movies/`);
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const addMovies = createAsyncThunk(
  "movies/addMovies",
  async (movie, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:4200/api/movies", {
        title: movie.title,
        director: movie.director,
        summary: movie.summary,
        genre: movie.genre,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const editMovies = createAsyncThunk(
  "movies/editMovies",
  async (movie, thunkAPI) => {
    try {
      const response = await axios.put(
        `http://localhost:4200/api/movies/${movie.id}`,
        {
          title: movie.title,
          director: movie.director,
          summary: movie.summary,
          genre: movie.genre,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// delete movie
export const deleteMovies = createAsyncThunk(
  "movies/deleteMovies",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:4200/api/movies/${id}`
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

//search movie
export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (search, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:4200/api/movies/search/${search}`
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.status;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get movies data
    builder.addCase(getMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    });

    // Add movies data
    builder.addCase(addMovies.pending, (state) => {
      state.isAddingMovie = true;
    });
    builder.addCase(addMovies.fulfilled, (state, action) => {
      state.isAddingMovie = false;
      state.movies = [...state.movies, action.payload];
    });
    builder.addCase(addMovies.rejected, (state, action) => {
      state.isAddingMovie = false;
      state.message = action.payload;
    });

    // Edit Movies data
    builder.addCase(editMovies.pending, (state) => {
      state.isEditingMovie = true;
    });
    builder.addCase(editMovies.fulfilled, (state, action) => {
      state.isEditingMovie = false;
      state.movies = state.movies.map((movie) =>
        movie.id === action.payload.id ? action.payload : movie
      );
    });
    builder.addCase(editMovies.rejected, (state, action) => {
      state.isEditingMovie = false;
      state.message = action.payload;
    });

    // Delete movie data
    builder.addCase(deleteMovies.pending, (state) => {
      state.isDeleteMovie = true;
    });
    builder.addCase(deleteMovies.fulfilled, (state, action) => {
      state.isDeleteMovie = false;
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
    });
    builder.addCase(deleteMovies.rejected, (state, action) => {
      state.isDeleteMovie = false;
      state.message = action.payload;
    });

    // Search movie data
    builder.addCase(searchMovies.pending, (state) => {
      state.isSearchMovie = true;
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.isSearchMovie = false;
      state.movies = action.payload;
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.isSearchMovie = false;
      state.message = action.payload;
    });
  },
});

export default moviesSlice.reducer;
