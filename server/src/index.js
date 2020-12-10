const express = require('express');
const bodyParser = require('body-parser');
const fetch =  require('node-fetch');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
var corsOptions = {
  origin: 'http://localhost:4200',
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  const url = 'https://swapi.dev/api/' + req.query.resource;
  fetch(
    url
  )
  .then(res => res.text())
  .then(body => res.send(body));
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
