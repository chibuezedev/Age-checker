const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require('body-parser');

const ageRoutes = require("./routes/ageRoute");


const app = express();

//default middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))
app.use(helmet())

//cors policy middleware
app.use(cors ({
    origin: "*",
    methods: "POST, GET, PUT, PATCH, DELETE",
    allowedHeaders: "Content-Type, Authorization"
}))


//api middlewares
app.use('/api/v1', ageRoutes)

//error handler middleware
app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500
    const message = error.message
    const data = error.data
    res.status(status).json({message: message, data: data, })
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT} ....`)
})