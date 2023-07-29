// server.js

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes.js";

const app = express();

// Use the base path "/api/users" for userRoutes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));
