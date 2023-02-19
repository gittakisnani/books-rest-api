module.exports = (req, res, next) => {
    // only for get books route;
    let filters = null
    if(req.originalUrl.match(/books/gi) && req.method === 'GET') {
        // search by title, category, date, author_name
        const titleFilters = req.query.title ? { title : new RegExp(req.query.title, "i") } : {};
        const categoryFilters = (strict = false) => {
            if(req.query.category) {
                if(strict) return { $and: req.query.category.split('|').map(category => ( { category }))}
                return { $or: req.query.category.split('|').map(category => ( { category }))}
            }
            return {}
        }
        const authorNameFilters = req.query.author_name ? { author_name : new RegExp(req.query.author_name, "i") } : {};
        const minDateFilters = req.query?.min_year ? { release_year: { $gte: new Date(req.query?.min_year).toISOString()} } : {};
        const maxDateFilters = req.query?.max_year ? { release_year: { $lte: new Date(req.query?.max_year).toISOString()} } : {};

        if(req.query.strict === 'true') {
            filters = { $and: [titleFilters, authorNameFilters, { $and: [minDateFilters, maxDateFilters] }, categoryFilters(true)]}
        } else {
            filters = { $or: [titleFilters, authorNameFilters, { $or: [minDateFilters, maxDateFilters] }, categoryFilters(false)]}
        }
    }
    req.filters = filters;

    next()
}