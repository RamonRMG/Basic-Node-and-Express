
let express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.use(express.static(__dirname + '/public'))
app.use('/public', express.static(__dirname + '/public'))

app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
  });
});

if (process.env.VAR_NAME === "allCaps") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
}

app.get("/now", (req, res, next) => {
req.time = new Date().toString();
next();
},
(req, res) =>{
res.send({
time: req.time
  });
 }
);

app.get("/:word/echo", (req, res) => {
const { word } = req.params;
res.json({
echo: word
 });
});

app.get("/name", (req, res) =>{
res.json({ 
name: req.query.first + " " + req.query.last
 });
});

app.post("/name", (req, res) => {
  res.json({
    name: req.body.first + " " + req.body.last
  })
})

module.exports = app






























 module.exports = app;
