const db = require('../config.js');

const userController = {};

userController.login = (req,res,next) => {

}

userController.signup = (req,res,next) => {
    const username = req.body.username
    console.log('username: ',username)
    // const userExistsQry = {
    //     text: `SELECT EXISTS (
    //     SELECT 1
    //     FROM users
    //     WHERE username = req.body.username
    //     )`, 
    //     values: [username]}
    const userExistsQry = 'SELECT * FROM users'

    db.query(userExistsQry)
        .then(result => {
            console.log(result)
            console.log('L22')})
            return next()
        .catch(err => {
            return next(err)
        })

    
    
}

module.exports = userController