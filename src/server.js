require('dotenv').config()
const app = require("./app");
const PORT = process.env.PORT || 3333;


// Run the app
app.listen(PORT, () => console.log('Server is running'))