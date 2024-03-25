import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  isAddingMovie: false,
  // isEditingTask: false,
  // editTaskId: null,
  // category: "urgent",
  // filteredCategory: "all",
  // message: "",
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

// export const deleteTask = createAsyncThunk(
//   "task/deleteTask",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:4200/api/tasks/${id}`
//       );
//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         const message = error.response;
//         return thunkAPI.rejectWithValue(message);
//       }
//     }
//   }
// );

// export const editTask = createAsyncThunk(
//   "task/editTask",
//   async (task, thunkAPI) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:4200/api/tasks/${task.id}`,
//         {
//           title: task.title,
//           summary: task.summary,
//           category: task.category,
//         }
//       );
//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         const message = error.response;
//         return thunkAPI.rejectWithValue(message);
//       }
//     }
//   }
// );

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // setCategory: (state, action) => {
    //   state.category = action.payload;
    // },
    // setIsAddingTask: (state, action) => {
    //   state.isAddingTask = action.payload;
    // },
    // setFilteredCategory: (state, action) => {
    //   state.filteredCategory = action.payload;
    // },
    // setIsEditingTask: (state, action) => {
    //   state.isEditingTask = action.payload;
    // },
    // setEditTaskId: (state, action) => {
    //   state.editTaskId = action.payload;
    // },
  },
  extraReducers: (builder) => {
    // Get movies data
    builder.addCase(getMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.movies = action.payload;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Add movies data
    builder.addCase(addMovies.pending, (state) => {
      state.isAddingMovie = true;
    });
    builder.addCase(addMovies.fulfilled, (state, action) => {
      state.isAddingMovie = false;
      state.isSuccess = true;
      state.movies = [...state.movies, action.payload];
    });
    builder.addCase(addMovies.rejected, (state, action) => {
      state.isAddingMovie = false;
      state.isError = true;
      state.message = action.payload;
    });

    // // Delete task data
    // builder.addCase(deleteTask.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(deleteTask.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    // });
    // builder.addCase(deleteTask.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    // });

    // // Edit task data
    // builder.addCase(editTask.pending, (state) => {
    //   state.isEditingTask = true;
    // });
    // builder.addCase(editTask.fulfilled, (state, action) => {
    //   state.isEditingTask = false;
    //   state.isSuccess = true;
    //   state.tasks = state.tasks.map((task) =>
    //     task.id === action.payload.id ? action.payload : task
    //   );
    // });
    // builder.addCase(editTask.rejected, (state, action) => {
    //   state.isEditingTask = false;
    //   state.isError = true;
    //   state.message = action.payload;
    // });
  },
});

// export const {
//   // setCategory,
// setIsAddingTask,
//   // setFilteredCategory,
//   // setIsEditingTask,
//   // setEditTaskId,
// } = moviesSlice.actions;
export default moviesSlice.reducer;
