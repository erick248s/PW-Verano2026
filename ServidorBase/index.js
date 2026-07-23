const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
const PORT = 3000;

let peliculas = [
  {
    id: 1,
    titulo: "GoodFellas",
    director: "Robert de Niro",
    año: 1990,
  },
  {
    id: 2,
    titulo: "SuperCool",
    director: "Michael Jackson",
    año: 2009,
  },
];
let idActual = peliculas.length + 1;
//Obtener todas las peliculas
app.get("/peliculas", (req, res) => {
  res.json(peliculas);
});

//Obtener una pelicula por id
app.get("/peliculas/:id", (req, res) => {
  const id = Number(req.params.id);
  const pelicula = peliculas.find((pelicula) => pelicula.id === id);
  if (!pelicula) {
    return res.status(404).json({
      mensaje: "Pelicula no encontrada",
    });
  }
  res.json(pelicula);
});

// Registrar una pelicula nueva
app.post("/peliculas", (req, res) => {
  const { titulo, director, año } = req.body;
  if (!titulo || !director || !año) {
    return res.status(400).json({
      mensaje: "Faltan datos de la pelicula",
    });
  }
  const nuevaPelicula = {
    id: idActual++,
    titulo: titulo,
    director: director,
    año: Number(año),
  };

  peliculas.push(nuevaPelicula);
  res.status(201).json({
    mensaje: "Pelicula registrada correctamente",
    pelicula: nuevaPelicula,
  });
});

//Actualizar una pelicula
app.put("/peliculas/:id", (req, res) => {
  const id = Number(req.params.id);
  const { titulo, director, año } = req.body;
  if (!titulo || !director || !año) {
    return res.status(400).json({
      mensaje: "Faltan datos de la películas",
    });
  }
  const indice = peliculas.findIndex((pelicula) => pelicula.id === id);
  if (indice === -1) {
    return res.status(400).json({
      mensaje: "Pelicula no encontrada",
    });
  }
  peliculas[indice] = {
    id: id,
    titulo: titulo,
    director: director,
    año: Number(año),
  };

  res.json({
    mensaje: "Pelicula actualizada correctamente",
    pelicula: peliculas[indice],
  });
});

//eliminar una pelicula
app.delete("/peliculas/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = peliculas.findIndex((pelicula) => pelicula.id === id);
  if (indice === -1) {
    return res.status(404).json({
      mensaje: "pelicula no encontrada",
    });
  }
  const peliculaEliminada = peliculas[indice];
  peliculas.splice(indice, 1);

  res.json({
    mensaje: "Pelicula eliminada correctamente",
    pelicula: peliculaEliminada,
  });
});

app.listen(PORT, () => {
  console.log("Servidor iniciado en http://localhost:" + PORT);
});
