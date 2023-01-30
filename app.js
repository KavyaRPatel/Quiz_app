var express = require("express");
var app = express();
const cors = require('cors');
const bodyparser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const { response } = require("express");
const todos = []
var router = express.Router();



const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    next();
})

const credential = {
    username: "admin",
    password: "admin"
}





app.post('/', async (req, res) => {
    try {
        const name=req.body.username
        const password=req.body.password
        res.send('good')
    } catch (err) {
        console.log(err.message);

    }

})




app.listen(3000, () => {
    console.log("Server is listening to http://localhost:3000");
})