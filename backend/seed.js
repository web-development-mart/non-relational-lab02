const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/movies_db";

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  director: String,
});

const Movie = mongoose.model("Movie", movieSchema);

async function main() {
  await mongoose.connect(URI);

  await Movie.deleteMany({});

  await Movie.insertMany([
    { title: "The Shawshank Redemption", year: 1994, genre: "Drama",    director: "Frank Darabont" },
    { title: "The Godfather",            year: 1972, genre: "Crime",    director: "Francis Ford Coppola" },
    { title: "The Dark Knight",          year: 2008, genre: "Action",   director: "Christopher Nolan" },
    { title: "Inception",                year: 2010, genre: "Sci-Fi",   director: "Christopher Nolan" },
    { title: "Interstellar",             year: 2014, genre: "Sci-Fi",   director: "Christopher Nolan" },
    { title: "Parasite",                 year: 2019, genre: "Thriller", director: "Bong Joon-ho" },
    { title: "Spirited Away",            year: 2001, genre: "Animation",director: "Hayao Miyazaki" },
  ]);

  const count = await Movie.countDocuments();
  console.log(`Seeded ${count} movies.`);

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
