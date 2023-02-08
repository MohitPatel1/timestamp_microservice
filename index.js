// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const { response } = require('express');
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
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.get("/api/:date_str", function (req, res) {
  const date_str = req.params.date_str;
  let date = new Date(date_str)
  console.log(date+ "first check")

  if(date == 'Invalid Date'){
    console.log("if date is a number" )
    const date_num = parseInt(date_str)
    console.log(date_num+ "date parsed into number")
    let date = new Date(date_num)
    if(date == 'Invalid Date'){
      console.log(date+" date not a valid unix")
      res.json({
        error: "Invalid Date"
      })
    }
    else{
      console.log(date+" date is unix")
      console.log(date_num)
      console.log(date.toDateString)
      res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
      });
    }
    // console.log(date + "unix into date")
  }

  else{
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }
});

// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
