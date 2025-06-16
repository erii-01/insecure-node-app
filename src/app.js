require("dotenv").config();

const express = require("express");
const app = express();

const API_KEY = process.env.GITHUB_API_KEY;
//const extraVar = 'Esta variable ya no se usa, pero alguien olvidó borrarla!'

if (API_KEY) {
  console.log("API_KEY cargada correctamente.");
} else {
  console.error(
    "ADVERTENCIA: GITHUB_API_KEY no está definida en las variables de entorno."
  );
  console.error(
    "Asegúrate de tener un archivo .env o de configurarla en el entorno de producción."
  );
}

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Solicitud recibida");
  res.send("API Insegura funcionando (sin token hardcodeado)");
});

app.get("/secure-data", (req, res) => {
  const key = req.headers["x-api-key"];
  if (key !== API_KEY) {
    return res.status(403).json({ error: "Acceso denegado" });
  }
  res.json({ secret: "12345" });
});

module.exports = app;
