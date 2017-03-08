const express = require('express');
const bodyParser = require('body-parser');
const dinoController = require('./controllers/dinoController');
const port = 3000;

const app = express();

/**
* Application level middleware and custom middleware
*/
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log('-'.repeat(40));
  console.log('A request has hit our api');
  console.log('req.url: ', req.url);
  console.log('-'.repeat(40));
  next(); // <---- continue with our middleware stack
});

/**
* Routes
*/
app.get('/dinolog', dinoController.index);
app.get('/dinolog/:id', dinoController.show);
app.post('/dinolog', dinoController.create);
app.put('/dinolog/:id', dinoController.update);
app.delete('/dinolog/:id', dinoController.destroy);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
