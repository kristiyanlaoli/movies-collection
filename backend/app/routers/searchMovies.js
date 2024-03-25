import prisma from "../utils/prisma.js";
import { Router } from "express";
const router = Router();

// search movies by title
router.get("/movies/search/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const movies = await prisma.movie.findMany({
      where: {
        title: {
          contains: title,
        },
      },
      include: {
        genres: true,
      },
    });

    if (!movies.length) {
      return res.status(404).json({ message: "No movies found" });
    }

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

export default router;
