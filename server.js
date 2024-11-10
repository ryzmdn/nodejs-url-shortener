import express from "express";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", urlRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at PORT ${process.env.PORT}`);
});
