import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import cors from "cors";
import surveyRoute from "./routes/surveysRoute.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.use("/survey", surveyRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
