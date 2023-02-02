var express = require("express");
var app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyparser = require("body-parser");
const { response } = require("express");
const pool = require("./db");



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


app.post('/add', async (req, res) => {
  try {
    console.log("In app.js")
    const question = req.body.question;
    const answer = req.body.answer;
    const option_1 = req.body.option_1;
    const option_2 = req.body.option_2;
    const option_3 = req.body.option_3;
    const new_ques = await pool.query("INSERT INTO question VALUES ($1,$2,$3,$4,$5) RETURNING * ", [question, option_1, option_2, option_3, answer])
    res.json("Insert Successful")
  } catch (err) {
    console.log(err.message);
  }

}
)
app.get('/quiz', async (req, res) => {
const ques=await pool.query("SELECT * FROM question")
res.json(ques.rows)

})

const credential={
  username: 'admin',
  password: 'admin'
}


app.post('/', (req, res) => {
  try {
    const name = req.body.username
    const password = req.body.password
    console.log(name, password) //works
    // res.send('good')
    if (name == credential.username && password == credential.password) {
      const token = jwt.sign({ name: name }, 'secretkey');
      res.status(200).json({
        message: 'ok',
        title: 'login success',
        token: token
      })
    }
    else {
      console.log('error')
    }



  } catch (err) {
    console.log(err.message);

  }

})

app.use((req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    jwt.verify(token, 'secetKey', (error, decoded) => {
      if (error) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }

      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }
});








app.listen(3000, () => {
  console.log("Server is listening to http://localhost:3000");
})