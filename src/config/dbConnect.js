const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.DATABASE_URI);
        console.log('Connected to the DB')
    } catch(err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = dbConnect;