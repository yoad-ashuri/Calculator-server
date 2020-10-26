const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname +  "/bmiCalculator.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is " + result);
});

app.post("/bmiCalculator", function(req, res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var resulte = weight / (height * height);

  resulte = resulte.toFixed(2);
  resulte = Number(resulte);
  res.send("Your BMI is " + resulte);
});

app.listen(3000, function() {
  console.log("listen on port 3000");
});
