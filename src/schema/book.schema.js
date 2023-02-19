const Joi = require('joi');
const { booksCategories } = require('../config/enums');

const createBookSchema = Joi.object({
    body: Joi.object({
        title: Joi.string().min(1).required(),
        content: Joi.string().min(10).required(),
        author_name: Joi.string().required(),
        category: Joi.array().items(Joi.string().valid(...booksCategories).required(true)).min(1).required(),
        release_year: Joi.date().required()
    })
})

const params = Joi.object({
    id: Joi.string().required()
})

const getBookSchema = Joi.object({
    params,
})

const updateBookSchema = Joi.object({
    params,
    body: Joi.object({
        title: Joi.string().min(1).optional(),
        content: Joi.string().min(10).optional(),
        author_name: Joi.string().optional(),
        category: Joi.array().items(Joi.string().valid(...booksCategories).required(true)).min(1).optional(),
        release_year: Joi.date().optional()
    })
})

const deleteBookSchema = Joi.object({
    params
})

module.exports = { createBookSchema, getBookSchema, deleteBookSchema, updateBookSchema }