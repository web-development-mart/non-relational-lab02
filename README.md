# Lab 02 - Flat Mongoose API

## What this lab is about

You know Express. You know MongoDB. This lab connects the two for the first time using **Mongoose**.

Everything lives in a single file: `server.js`. The schema, the model, and all five routes are there together so you can see the full picture before it gets split across layers in the next lab.

Your job: fill in the five TODO route handlers.

## Setup

Make sure MongoDB is running locally on port 27017.

```bash
cd backend
npm install
```

Seed the database with sample movies:

```bash
npm run seed
```

## Project structure

```
backend/
  server.js   - Express app + Mongoose schema + all routes - fill in the TODOs
  seed.js     - Sample data - provided
```

## Your task

Open `backend/server.js`. There are 5 route handlers with TODOs. Fill them in using the `Movie` model.

| Route | Method | Task |
|-------|--------|------|
| `/movies` | `GET` | Return all movies |
| `/movies/:id` | `GET` | Return one movie by id |
| `/movies` | `POST` | Create a new movie from `req.body` |
| `/movies/:id` | `PUT` | Update a movie with `req.body` |
| `/movies/:id` | `DELETE` | Delete a movie |

## Mongoose commands reference

| Command | What it does |
|---------|-------------|
| `Movie.find()` | Get all documents |
| `Movie.findById(id)` | Get one document by id, returns `null` if not found |
| `Movie.create(doc)` | Insert a document, returns the saved document |
| `Movie.findByIdAndUpdate(id, update, { new: true })` | Update and return the new document, returns `null` if not found |
| `Movie.findByIdAndDelete(id)` | Delete a document, returns the deleted document or `null` |

## HTTP status codes to use

| Situation | Status code |
|-----------|-------------|
| Successful read | `200` |
| Document created | `201` |
| Successful delete | `204` |
| Document not found | `404` |
| Server error | `500` |

## Run the server

```bash
npm start
```

Then test your routes in Bruno: `http://localhost:3000/movies`
