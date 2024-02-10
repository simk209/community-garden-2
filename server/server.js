// Import required modules
const express = require('express');
const pg = require('pg');
const bcrypt = require('bcrypt');
const cors = require('cors');

// require controllers
const userController = require('../controllers/userController')


// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// routes

// login
app.post('/login', userController.login, (req,res)=>{
    return res.sendStatus(200)
})

// signup
app.post('/signup', userController.signup, (req,res)=>{
    return res.sendStatus(200)
})

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => {
    res.send('404');
  });

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(err, defaultErr);
    console.log(errorObj.log);
    const status = JSON.stringify(errorObj.status);
    const response = JSON.stringify(errorObj.message);
    return res.status(status).send(response);
  });

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });

module.exports = app;