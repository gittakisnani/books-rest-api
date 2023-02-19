const bookServices = require('../service/book.service');
const AppError = require('../utils/AppError');


async function createBookHandler(req, res) {
    const book = await bookServices.createBook(req.body);
    if(!book) throw new AppError('Cannot create new book. Please try later.', 400);
    res.json(book)
}

async function getBookHandler(req, res) {
    const book = await bookServices.getBook(req.params.id);
    if(!book) throw new AppError('Cannot find book with such id', 404);
    res.json(book)
}

async function getBooksHandler(req, res) {
    const books = await bookServices.getBooks(req.filters);
    if(!Array.isArray(books)) throw new AppError('Cannot search for books. Please try later.', 400);
    res.json(books)
}

async function updateBookHandler(req, res) {
    const book = await bookServices.updateBook(req.params.id, req.body);
    if(!book) throw new AppError('Cannot update that book. Please try later.', 400);
    res.json(book)
}

async function deleteBookHandler(req, res) {
    const book = await bookServices.deleteBook(req.params.id);
    if(!book) throw new AppError('Cannot delete that book. Please try later.');
    res.status(204).json({ message: 'Book successfully deleted'})
}

module.exports = { createBookHandler, getBookHandler, getBooksHandler, updateBookHandler, deleteBookHandler }