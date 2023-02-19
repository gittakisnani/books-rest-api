const mongoose = require('mongoose');
const { booksCategories } = require('../config/enums');

const categorySchema = { type: String, required: true, enum: { values: booksCategories } }

const bookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        author_name: { type: String, required: true },
        category: { type: [categorySchema], required: true, min: [1, 'Book should have at least one category' ]},
        release_year: { type: Date, required: true }
    },
    {
        timestamps: true 
    }
)

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;