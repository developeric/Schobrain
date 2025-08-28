import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes.js";
import { startDB } from "./config/database.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Para poder usar __dirname con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para loggear body
const logreqbody = (req, res, next) => {
  if (req.body) {
    console.log("Llegó el req.body");
    console.log(req.body);
  }
  next();
};

// CORS y JSON
app.use(cors());
app.use(express.json());
app.use(logreqbody);

// Servir archivos estáticos desde /Front/public
app.use(express.static(path.join(__dirname, "..", "Front", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Front", "public", "index.html"));
});

// Tus rutas API
app.use("/", router);

// Conectar a DB y levantar servidor
startDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});