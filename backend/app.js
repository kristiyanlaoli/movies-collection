import express from "express";
import router from "./app/router.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);
app.get("/api", (req, res) => {
  res.json({ message: "Hello, welcome to movies collection app" });
});

export default app;
