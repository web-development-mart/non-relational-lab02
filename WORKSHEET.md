# Lab 02 - API Worksheet

Use Postman to test your API as you implement each route. Answer every question below.

Make sure the server is running (`npm start`) and the database is seeded (`npm run seed`) before you begin.

Base URL: `http://localhost:3000`

---

## Part 1 - Reading Data

**1.** Send `GET /movies`. How many movies are returned?

> Your answer:

---

**2.** Look at one of the movie objects in the response. List all the fields it contains.

> Your answer:

---

**3.** Copy the `_id` of any movie. Send `GET /movies/:id` using that id. Paste the full response below.

> Your answer:

---

**4.** Send `GET /movies/:id` using this id: `000000000000000000000000`. What status code do you get? Why?

> Your answer:

---

**5.** Send `GET /movies/not-a-valid-id`. What status code do you get? Is this the same situation as question 4?

> Your answer:

---

## Part 2 - Creating Data

**6.** Send `POST /movies` with the following body:

```json
{
  "title": "Your Name",
  "year": 2016,
  "genre": "Animation",
  "director": "Makoto Shinkai"
}
```

What status code do you get?

> Your answer:

---

**7.** What is the `_id` of the movie you just created? (You will need it for Part 3 and 4.)

> Your answer:

---

**8.** Send `GET /movies` again. Does your new movie appear in the list?

> Your answer:

---

**9.** Send `POST /movies` with an empty body `{}`. What status code do you get? Does a document get created? Check with `GET /movies`.

> Your answer:

---

## Part 3 - Updating Data

**10.** Send `PUT /movies/:id` using the id from question 7, with this body:

```json
{
  "title": "Your Name."
}
```

What does the response contain? Is the original `year`, `genre`, and `director` still there?

> Your answer:

---

**11.** Send `GET /movies/:id` for the same id. Does the title reflect your update?

> Your answer:

---

**12.** Send `PUT /movies/000000000000000000000000` with any body. What status code do you get?

> Your answer:

---

## Part 4 - Deleting Data

**13.** Send `DELETE /movies/:id` using the id from question 7. What status code do you get? Does the response have a body?

> Your answer:

---

**14.** Send `GET /movies/:id` for the same id. What status code do you get now?

> Your answer:

---

**15.** Send `DELETE /movies/:id` for the same id again. What status code do you get? Why is it different from question 13?

> Your answer:

---

## Part 5 - Reflection

**16.** What is the difference between a `404` and a `500` status code? Give one example of each from this lab.

> Your answer:

---

**17.** In question 10, you only sent `title` in the body but the other fields were preserved. Why? What would happen if Mongoose replaced the whole document instead of patching it?

> Your answer:

---

**18.** You implemented all 5 routes in a single `server.js` file. In the next lab, those same 5 operations will be split across `routes/`, `controllers/`, `services/`, and `models/`. What problem does that separation solve?

> Your answer:
