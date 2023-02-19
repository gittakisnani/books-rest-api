const Router = require('express').Router;
const bookSchemas = require('../schema/book.schema');
const bookHandlers = require('../controller/book.controller');
const tryCatch = require('../utils/tryCatch');
const validateSchema = require('../middleware/validateSchema')
const router = Router();

router.post('/create', validateSchema(bookSchemas.createBookSchema), tryCatch(bookHandlers.createBookHandler));
router.get('/', tryCatch(bookHandlers.getBooksHandler));

router.route('/:id')
    .get(validateSchema(bookSchemas.getBookSchema), tryCatch(bookHandlers.getBookHandler))
    .put(validateSchema(bookSchemas.updateBookSchema), tryCatch(bookHandlers.updateBookHandler))
    .patch(validateSchema(bookSchemas.updateBookSchema), tryCatch(bookHandlers.updateBookHandler))
    .delete(validateSchema(bookSchemas.deleteBookSchema), tryCatch(bookHandlers.deleteBookHandler))

module.exports = router;