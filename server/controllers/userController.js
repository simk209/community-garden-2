const db = require('../config.js');
const bcrypt = require('bcrypt');

const userController = {};

userController.login = (req,res,next) => {

}

userController.signup = (req,res,next) => {
    const email = req.body.email
    const password = req.body.password 

    console.log('email: ',email)
    const userExistsQry = 
        `SELECT EXISTS (
        SELECT 1
        FROM users
        WHERE email = $1
        )`
    // const userExistsQry = 'SELECT * FROM users'
    const values = [email]
    
    db.query(userExistsQry,values)
        // check if email is alrdy being used
        .then(result => {
            const exists = result.rows[0].exists

            // if the email alrdy exists in the db return error message
            if (exists) {
                return res.status(400).json({ error: 'This email is already in use.' });

            }

            // otherwise, hash user's pw (this is an asyn func)
            else {
                return bcrypt.hash(password,10)
            }  
        })
        // store user info (including hashed pw) in db
        .then(passwordHash => {
            const newUserQry = {
                text: 'INSERT INTO users(email, password_hash) VALUES($1, $2)',
                values: [email, passwordHash],
              };
            return db.query(newUserQry.text, newUserQry.values);
        })
        .then(()=> next())
        .catch(err => {
            return next(err)
        })    
}

module.exports = userController