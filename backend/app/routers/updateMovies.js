import prisma from "../utils/prisma.js";
import { Router } from "express";
const router = Router();

// update movie by id
router.put("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const { title, director, summary, genre } = req.body;
  try {
    // First update the movie
    const movie = await prisma.movie.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        director,
        summary,
      },
    });

    // Then update the genres
    // Delete the old GenreMovie records associated with the movie
    await prisma.genreMovie.deleteMany({
      where: {
        movieId: Number(id),
      },
    });

    // For each genre in the array, connect it to the movie
    for (let i = 0; i < genre.length; i++) {
      await prisma.genreMovie.create({
        data: {
          genreId: genre[i],
          movieId: movie.id,
        },
      });
    }

    // Get the updated movie and include the genres
    const updatedMovie = await prisma.movie.findUnique({
      where: {
        id: movie.id,
      },
      include: {
        genres: true,
      },
    });

    // Map over the genres to replace the genres array with an array of genreIds
    const modifiedMovie = {
      ...updatedMovie,
      genres: updatedMovie.genres.map((genre) => genre.genreId),
    };

    res.status(200).json(modifiedMovie);
  } catch (error) {
    res.status(400).json({ message: "Unable to update movie" });
  }
});

export default router;
