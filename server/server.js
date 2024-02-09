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