// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/timestamp", function (req, res) {
  const date = new Date()
  // console.log(date.getTime())
  // console.log(date.toUTCString())
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.get("/api/timestamp/:date_str", function (req, res) {
  const date_str = req.params.date_str;
  const date = new Date(date_str)
  console.log(date)
  const date_num = parseInt(date)
  console.log(date_num)
  // console.log(typeof(date_num))
  // console.log(date.toUTCString())

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

// app.get("api/timestamp/:date", function (req , res) {
//   const { date } = req.params;
//   console.log(date)
//   console.log(typeof(date))
//   return res.json({
//     utc: date.getTime,
//     greeting: 'kya haal chal'
//   })
// })


// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
