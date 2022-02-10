var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors());

// app.get("/", function (req, res) {
//   res.send("Hello abubakar je jeee!");
// });

app.get("/sendfile", function (req, res) {
  res.sendFile("test.html", { root: __dirname });
});

app.get("/sendjson", function (req, res) {
  res.send({ id: 1, name: "abubakar" });
});

app.get("/jsonobject", function (req, res) {
  res.json({ id: 1, name: "abubakar" });
});
app.get("/ChartJsonArrayOfObject", function (req, res) {
  res.json([
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
    { x: 6, y: 7 },
    { x: 12, y: 12 },
    { x: 41, y: 54 },
    { x: 14, y: 45 },
    { x: 22, y: 23 },
    { x: 15, y: 25 },
    { x: 29, y: 63 },
    { x: 21, y: 73 },
  ]);
});

app.get("*", function (req, res) {
  res.send("Hello world!");
});

app.listen(3000);
