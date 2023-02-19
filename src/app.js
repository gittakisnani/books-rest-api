require('dotenv').config();
const cors = require('cors')
const express = require('express');
const corsOptions = require('./config/corsOptions');
const dbConnect = require('./config/dbConnect');
const errorHandler = require('./middleware/errorHandler');
const searchBooks = require('./middleware/searchBooks');
const bookRoute = require('./route/book.route')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

dbConnect();

app.get('/healthcheck', (req, res) => res.sendStatus(200));

app.use('/books', searchBooks, bookRoute);

app.all('*', (req, res) => {
    res.sendStatus(404)
})

app.use(errorHandler)

module.exports = app