import express from "express";
import bodyParser from "body-parser";
import schoolsRoutes from "./routes/school-route.js";
import {connection as db} from "./db.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api", schoolsRoutes);

const startServer = async () => {
  try {
    await db;
    console.log("Database connected successfully.");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1);
  }
};

startServer();
