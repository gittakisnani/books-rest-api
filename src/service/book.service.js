const Book = require("../model/book.model");

async function createBook(input) {
    return Book.create(input)
}

async function getBook(id) {
    return Book.findById(id).lean().exec();
}

async function getBooks(filters) {
    return Book.find(filters).lean().exec()
}

async function updateBook(id, update) {
    return Book.findByIdAndUpdate(id, update, { new: true }).lean().exec()
}

async function deleteBook(id) {
    return Book.findByIdAndDelete(id).lean().exec()
}

module.exports = { createBook, getBook, getBooks, deleteBook, updateBook }