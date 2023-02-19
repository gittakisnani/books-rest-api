const AppError = require("../utils/AppError")
const whiteList = require("./whiteList")

const corsOptions = {
    origin: (origin, callback) => {
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new AppError(`${origin} is not allowed by CORS`, 401))
        }
    },
    methods: "GET,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200
}

module.exports = corsOptions