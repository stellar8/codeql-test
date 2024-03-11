const express = require('express');

const LISTEN_PORT = 8080;
const app = express();

app.get('/', function (req, res) {
  const redirectUrl = req.query.redirectUrl || '/home';
  res.redirect(redirectUrl);
});

app.get('/home', function (req, res) {
  res.contentType('text/html').send("<h1>Welcome to Home Page</h1>");
});

app.listen(LISTEN_PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on port", LISTEN_PORT);
});
