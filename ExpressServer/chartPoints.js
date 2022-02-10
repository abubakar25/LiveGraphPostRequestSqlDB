const express = require("express");
// const logger = require("morgan");
var mysql = require("mysql");
const cors = require("cors");

const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pointsdb",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

let points = [];

app.post("/create", function (req, res) {
  var x = req.body.x;
  var y = req.body.y;

  var sql = `INSERT INTO pointstable (x, y) VALUES ("${x}", "${y}")`;

  connection.query(sql, function (err) {
    if (err) throw err;
    // console.log(sql);
  });

  const newPoints = {
    x: req.body.x,
    y: req.body.y,
  };

  points.push(newPoints);
  console.log(points);
});

app.get("/ChartJsonArrayOfObject", function (req, res) {
  connection.query("SELECT  x , y FROM pointstable", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
  // res.json([
  //   { x: 1, y: 1 },
  //   { x: 2, y: 2 },
  //   { x: 3, y: 3 },
  //   { x: 6, y: 7 },
  //   { x: 12, y: 12 },
  //   { x: 41, y: 54 },
  //   { x: 14, y: 45 },
  //   { x: 22, y: 23 },
  //   { x: 15, y: 25 },
  //   { x: 29, y: 63 },
  //   { x: 21, y: 73 },
  // ]);
  // res.json(result);
});

//start your server on port 3001
app.listen(3001, () => {
  console.log("Server Listening on port 3001");
});
