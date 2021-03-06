'use strict';

//3rd party dependencies
const express = require('express');


//server constants
const notFoundHandler = require('./error-handling/404');
const errorHandler = require('./error-handling/500');
const v1Routes = require('./routes/v1');

const app = express();


//app level middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', v1Routes);

app.get('/', homehandler);

app.use('*', notFoundHandler);
app.use(errorHandler);



function homehandler(req, res) {

  res.status(200).send('Basic API Server project This Is home'
  );
}

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`listening on ${port}`));
  },
};
