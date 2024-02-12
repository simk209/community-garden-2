const db = require('../config.js');

const userController = {};

userController.login = (req,res,next) => {

}

userController.signup = (req,res,next) => {
    const email = req.body.email
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
        .then(result => {
            console.log(result)
            console.log('L22')})
            return next()
        .catch(err => {
            return next(err)
        })

    
    
}

module.exports = userController