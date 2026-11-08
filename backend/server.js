const express = require("express");
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/movies_db";
const PORT = process.env.PORT || 3000;

// ----------------------------------------------------------
// Schema and Model - provided, do not modify
// ----------------------------------------------------------
const movieSchema = new mongoose.Schema({
  title:    String,
  year:     Number,
  genre:    String,
  director: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// ----------------------------------------------------------
// App setup - provided, do not modify
// ----------------------------------------------------------
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// ----------------------------------------------------------
// GET /movies
// Return all movies as a JSON array.
// ----------------------------------------------------------
app.get("/movies", async (req, res) => {
  try {
    // TODO: return all movies
    // Hint: Movie.find()
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------------------------------------------
// GET /movies/:id
// Return a single movie by its id.
// Send 404 if no movie is found.
// ----------------------------------------------------------
app.get("/movies/:id", async (req, res) => {
  try {
    // TODO: return one movie by id
    // Hint: Movie.findById(req.params.id)
    //       send 404 if the result is null
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------------------------------------------
// POST /movies
// Create a new movie from req.body.
// Send the created document with status 201.
// ----------------------------------------------------------
app.post("/movies", async (req, res) => {
  try {
    // TODO: create a new movie from req.body
    // Hint: Movie.create(req.body)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------------------------------------------
// PUT /movies/:id
// Update a movie by its id with the fields in req.body.
// Send the updated document.
// Send 404 if no movie is found.
// ----------------------------------------------------------
app.put("/movies/:id", async (req, res) => {
  try {
    // TODO: update the movie and return the new document
    // Hint: Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    //       send 404 if the result is null
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------------------------------------------
// DELETE /movies/:id
// Delete a movie by its id.
// Send 204 (no content) on success.
// Send 404 if no movie is found.
// ----------------------------------------------------------
app.delete("/movies/:id", async (req, res) => {
  try {
    // TODO: delete the movie
    // Hint: Movie.findByIdAndDelete(req.params.id)
    //       send 404 if the result is null
    //       send 204 on success (res.sendStatus(204))
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------------------------------------------
// Start - provided, do not modify
// ----------------------------------------------------------
mongoose.connect(URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    console.log(`  GET    /movies`);
    console.log(`  GET    /movies/:id`);
    console.log(`  POST   /movies`);
    console.log(`  PUT    /movies/:id`);
    console.log(`  DELETE /movies/:id`);
  });
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
