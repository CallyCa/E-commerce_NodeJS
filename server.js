const mongoose = require("mongoose");
const dotenv = require('dotenv');

const app = require("./app");
const port = process.env.PORT || 3000;

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB,{ 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('DB connection successful'));

//console.log(process.env)

// Start Server
app.listen(port, () => {
    console.log("Rodando em http://localhost:3000/overview.html");
})