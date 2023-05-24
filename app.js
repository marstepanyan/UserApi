const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// conecting to mangodb
mongoose.connect('mongodb://localhost/users');
mongoose.Promise = global.Promise;

// middleware
app.use(bodyParser.json());

// initializing routs
app.use('/api', routes);

// middleware for error handling
app.use(function(err, req, res, next){
  res.send({error: err.message});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
