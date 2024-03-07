import express from "express";
import cors from "cors";
import connection from "./database/connection.js";
import blogRoutes from "./routes/routes.js";
import userRoutes from "./routes/user_routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);
app.use("/users", userRoutes);

try {
  await connection.authenticate();
  console.log("Connection is established");
} catch (error) {
  console.log(`Issues de conexión: ${error}`);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("This app listening in http://127.0.0.1:8000");
});
