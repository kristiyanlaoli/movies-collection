import { Router } from "express";
import addMovies from "./routers/addMovies.js";
import deleteMovies from "./routers/deleteMovies.js";
import updateMovies from "./routers/updateMovies.js";
import getMovies from "./routers/getMovies.js";
import searchMovies from "./routers/searchMovies.js";

const router = Router();

router.use("/api", addMovies);
router.use("/api", deleteMovies);
router.use("/api", updateMovies);
router.use("/api", getMovies);
router.use("/api", searchMovies);

export default router;
