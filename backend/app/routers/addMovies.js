import prisma from "../utils/prisma.js";
import { Router } from "express";
const router = Router();

// add movie
router.post("/movies", async (req, res) => {
  const { title, director, summary, genre } = req.body;
  try {
    // Create a movie
    const movie = await prisma.movie.create({
      data: {
        title,
        director,
        summary,
      },
    });

    // Connect the movie and the genre
    for (let i = 0; i < genre.length; i++) {
      await prisma.genreMovie.create({
        data: {
          genreId: genre[i],
          movieId: movie.id,
        },
      });
    }

    res.status(201).json({ movie });
  } catch (error) {
    res.status(400).json({ message: "Unable to add movie" });
  }
});

export default router;
