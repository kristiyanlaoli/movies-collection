import prisma from "../utils/prisma.js";
import { Router } from "express";
const router = Router();

// delete movie by id
router.delete("/movies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // First delete the GenreMovie records associated with the movie
    await prisma.genreMovie.deleteMany({
      where: {
        movieId: Number(id),
      },
    });

    // Then delete the movie
    const movie = await prisma.movie.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Unable to delete movie" });
  }
});

export default router;
