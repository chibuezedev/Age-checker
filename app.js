const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require('body-parser');

const ageRoutes = require("./routes/ageRoute");


const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))
app.use(helmet())


app.use(cors ({
    origin: "*",
    methods: "POST, GET, PUT, PATCH, DELETE",
    allowedHeaders: "Content-Type, Authorization"
}))



app.use('/api/v1', ageRoutes)


app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500
    const message = error.message
    const data = error.data
    res.status(status).json({message: message, data: data, })
})


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server listening on port ${port} ....`)
})