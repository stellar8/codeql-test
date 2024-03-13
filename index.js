const express = require('express');

const LISTEN_PORT = 8080;
const app = express();

app.get('/', function (req, res) {
  const redirectUrl = req.query.redirectUrl || '/home';
  res.redirect(redirectUrl);
});

app.get('/home', function (req, res) {
  const rawBody = req.query.body || '';
  const body = sanitizeHtml(rawBody)
  res.contentType('text/html').send(`<h1>Welcome to Home Page</h1><p>${body}</p>`);
});

function sanitizeHtml(rawHtml) {
  return rawHtml
    .replace('<', '&lt;')
    .replace('&', '&amp;')
    .replace('>', '&gt;');
}

app.listen(LISTEN_PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on port", LISTEN_PORT);
});
