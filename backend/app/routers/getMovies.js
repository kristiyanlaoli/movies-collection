import prisma from "../utils/prisma.js";
import { Router } from "express";
const router = Router();

// get all movies and include genres name
router.get("/movies", async (req, res) => {
  try {
    const movies = await prisma.movie.findMany({
      include: {
        genres: true,
      },
    });

    // Map over the movies to replace the genres array with an array of genreIds
    const modifiedMovies = movies.map((movie) => ({
      ...movie,
      genres: movie.genres.map((genre) => genre.genreId),
    }));

    res.status(200).json(modifiedMovies);
  } catch (error) {
    res.status(400).json({ message: "Unable to get movies" });
  }
});

// get movie by id
router.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        genres: true,
      },
    });

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // Map over the genres to replace the genres array with an array of genreIds
    const modifiedMovie = {
      ...movie,
      genres: movie.genres.map((genre) => genre.genreId),
    };

    res.status(200).json(modifiedMovie);
  } catch (error) {
    res.status(400).json({ message: "Unable to get movie" });
  }
});

// get movies by genre
router.get("/movies/genre/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const movies = await prisma.genreMovie.findMany({
      where: {
        genreId: Number(id),
      },
      include: {
        movie: true,
      },
    });

    if (!movies.length) {
      return res
        .status(404)
        .json({ message: "No movies found for this genre" });
    }

    // Map over the movies to replace the movies array with an array of movieIds
    const modifiedMovies = movies.map((movie) => movie.movie);

    res.status(200).json(modifiedMovies);
  } catch (error) {
    res.status(400).json({ message: "Unable to get movies" });
  }
});

export default router;
